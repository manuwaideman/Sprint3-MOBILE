import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen({ onLoginSuccess }: { onLoginSuccess: (email: string) => void }) {
  const [email, setEmail] = useState('aluno@fiap.com');
  const [password, setPassword] = useState('123456');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }
    setSubmitting(true);
    try {
      // validação mínima para demo
      if (email.trim().toLowerCase() === 'aluno@fiap.com' && password === '123456') {
        onLoginSuccess(email.trim());
      } else {
        Alert.alert('Falha ao entrar', 'Credenciais inválidas. Use as credenciais do README.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', android: undefined })} style={{ flex:1 }}>
      <View style={{ flex:1, justifyContent:'center', padding:24 }}>
        <Text style={{ fontSize:24, fontWeight:'bold', marginBottom:16 }}>XP Invest – Login</Text>

        <Text style={{ fontSize:12, color:'#666', marginBottom:6 }}>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{ borderWidth:1, borderColor:'#ddd', borderRadius:10, padding:12, marginBottom:12 }}
          placeholder="seuemail@dominio.com"
        />

        <Text style={{ fontSize:12, color:'#666', marginBottom:6 }}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth:1, borderColor:'#ddd', borderRadius:10, padding:12, marginBottom:16 }}
          placeholder="••••••"
        />

        <Pressable
          onPress={onSubmit}
          disabled={submitting}
          style={{ backgroundColor:'#ed145b', borderRadius:12, padding:14, alignItems:'center' }}
        >
          <Text style={{ color:'#fff', fontWeight:'bold' }}>{submitting ? 'Entrando...' : 'Entrar'}</Text>
        </Pressable>

        <Text style={{ marginTop:12, fontSize:12, color:'#666' }}>
          Use <Text style={{ fontWeight:'bold' }}>aluno@fiap.com / 123456</Text> para testar.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
