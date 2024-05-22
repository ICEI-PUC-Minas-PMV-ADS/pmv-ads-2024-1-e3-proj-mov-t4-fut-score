import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../components/Button';

const Estatisticas = ({ route }) => {
  const { homeTeam, awayTeam, homeScore, awayScore } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.teamContainer}>
          <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{homeTeam.name}</Text>
        </View>
        <Text style={styles.score}>
          {homeScore} - {awayScore}
        </Text>
        <View style={styles.teamContainer}>
          <Image source={{ uri: awayTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{awayTeam.name}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Botao text="Escalação" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Botao text="Classificação" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Botao text="Estatísticas" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View>
          <Text>INFO</Text>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%', // Ajuste conforme necessário,
    marginLeft: 60
  },
  button: {
    width: '90%',
    marginVertical: 1, // Espaçamento vertical entre os botões
  },
  infoContainer:{
    marginTop: 20
  }
});

export default Estatisticas;
