import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../components/Card';
import { theme } from '../theme';

export default function SettingsScreen() {
  const onLogout = async () => {
    await AsyncStorage.removeItem('@xp:user');
    Alert.alert('Sessão encerrada', 'Reabra o app para voltar ao Login (fluxo mínimo).');
  };

  return (
    <View style={{ flex:1, padding: theme.spacing(2), backgroundColor: theme.colors.bg, gap: theme.spacing(2) }}>
      <Card title="Perfil">
        <Text style={{ color: theme.colors.subtext }}>aluno@fiap.com</Text>
      </Card>

      <Card>
        <Pressable
          onPress={onLogout}
          style={{
            backgroundColor: theme.colors.primary,
            padding: theme.spacing(1.5),
            borderRadius: theme.radii.md,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sair</Text>
        </Pressable>
      </Card>
    </View>
  );
}
