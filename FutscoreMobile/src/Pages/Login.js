import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, SafeAreaView, Text } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Digite sua senha"
          secureTextEntry
        />
        <Button
          title="Entrar"
          onPress={handleLogin}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    elevation: 5,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
