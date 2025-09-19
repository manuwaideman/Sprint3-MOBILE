import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

// telas
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import EducationScreen from './src/screens/EducationScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// tema
import { theme } from './src/theme';

type User = { email: string };

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.subtext,
        tabBarStyle: { borderTopColor: '#eee' },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: theme.colors.bg },
        headerTitleStyle: { fontSize: 18 },
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: 'home-outline',
            Portfolio: 'pie-chart-outline',
            Education: 'school-outline',
            Settings: 'settings-outline',
          };
          const name = icons[route.name] ?? 'ellipse-outline';
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Education" component={EducationScreen} options={{ title: 'Educação' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // carrega sessão persistida
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem('@xp:user');
        if (raw) setUser(JSON.parse(raw));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // callback recebido pela tela de Login (mínimo, sem Context)
  const handleLoginSuccess = async (email: string) => {
    const payload = { email };
    await AsyncStorage.setItem('@xp:user', JSON.stringify(payload));
    setUser(payload);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.bg }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Tabs" component={AppTabs} />
        ) : (
          <Stack.Screen name="Login">
            {() => <LoginScreen onLoginSuccess={handleLoginSuccess} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
