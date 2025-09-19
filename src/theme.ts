export const theme = {
  colors: {
    primary: '#ed145b', // FIAP
    text: '#111',
    subtext: '#666',
    bg: '#f7f7f9',
    card: '#ffffff',
    border: '#eee',
    success: '#12a454',
    warning: '#f2c94c',
  },
  radii: {
    md: 12,
    lg: 16,
    pill: 999,
  },
  spacing: (n: number) => n * 8,
  shadow: {
    card: {
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 },
      elevation: 4,
    },
  },
  font: {
    title: 22,
    h2: 18,
    body: 14,
    small: 12,
  },
};
