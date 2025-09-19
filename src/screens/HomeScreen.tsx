import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import Card from '../components/Card';
import { theme } from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: theme.spacing(2), backgroundColor: theme.colors.bg }}>
      <Text style={{ fontSize: theme.font.title, fontWeight: 'bold', marginBottom: theme.spacing(1) }}>
        Olá! 👋
      </Text>

      <Card title="Resumo do Dia" style={{ marginBottom: theme.spacing(2) }}>
        <View style={{ gap: 6 }}>
          <Text style={{ color: theme.colors.text }}>• Selic: 10,50% a.a</Text>
          <Text style={{ color: theme.colors.text }}>• Dólar: R$ 5,20</Text>
          <Text style={{ color: theme.colors.subtext }}>Dica: priorize reserva de emergência.</Text>
        </View>
      </Card>

      <Card title="Ações rápidas">
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {[
            { label: 'Carteira', icon: 'pie-chart-outline' },
            { label: 'Trilhas', icon: 'school-outline' },
            { label: 'Suporte', icon: 'chatbubble-ellipses-outline' },
          ].map((a) => (
            <Pressable key={a.label} style={{
              flex:1, backgroundColor:'#fafafb', borderRadius: theme.radii.md, padding: theme.spacing(2), alignItems:'center', borderWidth:1, borderColor: theme.colors.border
            }}>
              <Ionicons name={a.icon as any} size={22} color={theme.colors.primary} />
              <Text style={{ marginTop: 6, fontWeight: '600' }}>{a.label}</Text>
            </Pressable>
          ))}
        </View>
      </Card>
    </ScrollView>
  );
}
