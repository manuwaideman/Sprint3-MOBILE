import React from 'react';
import { ScrollView, Text, Linking, Pressable, View } from 'react-native';
import Card from '../components/Card';
import { theme } from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';

function LinkItem({ label, url }: { label: string; url: string }) {
  return (
    <Pressable onPress={() => Linking.openURL(url)} style={{ flexDirection:'row', alignItems:'center', paddingVertical:10 }}>
      <Ionicons name="open-outline" size={18} color={theme.colors.primary} />
      <Text style={{ marginLeft:8, color: theme.colors.primary, fontWeight: '600' }}>{label}</Text>
    </Pressable>
  );
}

export default function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: theme.spacing(2), backgroundColor: theme.colors.bg, gap: theme.spacing(2) }}>
      <Card title="Trilhas Sugeridas">
        <View style={{ gap: 8 }}>
          <Text>• Introdução a Investimentos</Text>
          <Text>• Renda Fixa na prática</Text>
          <Text>• ETFs e Diversificação</Text>
        </View>
      </Card>

      <Card title="Conteúdos Externos">
        <LinkItem label="Tesouro Direto" url="https://www.tesourodireto.com.br/" />
        <LinkItem label="Investidor.gov.br" url="https://www.investidor.gov.br/" />
      </Card>
    </ScrollView>
  );
}
