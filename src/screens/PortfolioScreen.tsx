import React from 'react';
import { View, Text } from 'react-native';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { theme } from '../theme';

export default function PortfolioScreen() {
  const alloc = [
    { name: 'Renda Fixa', pct: 60 },
    { name: 'Renda Variável', pct: 30 },
    { name: 'Fundos', pct: 10 },
  ];

  return (
    <View style={{ flex:1, padding: theme.spacing(2), backgroundColor: theme.colors.bg, gap: theme.spacing(2) }}>
      <Card title="Minha Carteira">
        <View style={{ gap: 12 }}>
          {alloc.map((a) => (
            <View key={a.name} style={{ gap: 6 }}>
              <Text style={{ fontWeight: '600' }}>{a.name} — {a.pct}%</Text>
              <ProgressBar value={a.pct} />
            </View>
          ))}
        </View>
      </Card>

      <Card title="Objetivo">
        <Text style={{ color: theme.colors.text }}>
          Aposentadoria (20 anos) — aporte sugerido: <Text style={{ fontWeight: 'bold' }}>R$ 500/mês</Text>
        </Text>
      </Card>
    </View>
  );
}
