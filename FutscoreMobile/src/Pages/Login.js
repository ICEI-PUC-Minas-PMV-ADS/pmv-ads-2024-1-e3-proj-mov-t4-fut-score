import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email, 'Password:', password);
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('Cadastro'); // Navega para a tela de cadastro
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
          color="#000" // Define a cor do botão para preto
        />
        <TouchableOpacity onPress={handleNavigateToSignUp}>
          <Text style={styles.signUpText}>Não tem uma conta? Cadastrar</Text>
        </TouchableOpacity>
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
  signUpText: {
    marginTop: 20,
    color: '#228B22', 
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
