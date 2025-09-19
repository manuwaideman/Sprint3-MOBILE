import React from 'react';
import { View } from 'react-native';
import { theme } from '../theme';

export default function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <View style={{
      height: 10,
      backgroundColor: '#e9e9ee',
      borderRadius: theme.radii.pill,
      overflow: 'hidden',
    }}>
      <View style={{
        width: `${pct}%`,
        height: '100%',
        backgroundColor: theme.colors.primary,
      }} />
    </View>
  );
}
