import React, { ReactNode } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { theme } from '../theme';

export default function Card({
  title,
  children,
  style,
}: { title?: string; children: ReactNode; style?: ViewStyle }) {
  return (
    <View style={[{
      backgroundColor: theme.colors.card,
      borderRadius: theme.radii.lg,
      padding: theme.spacing(2),
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...theme.shadow.card,
    }, style]}>
      {title ? <Text style={{ fontSize: theme.font.h2, fontWeight: 'bold', marginBottom: 6 }}>{title}</Text> : null}
      {children}
    </View>
  );
}
