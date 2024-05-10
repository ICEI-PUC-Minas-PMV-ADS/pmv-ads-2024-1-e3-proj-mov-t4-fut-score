import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GameCard = ({ homeTeam, awayTeam, homeScore, awayScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.teamContainer}>
          {/* Logo do time da casa */}
          <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
          {/* Nome do time da casa */}
          <Text style={styles.teamName}>{homeTeam.name}</Text>
        </View>
        {/* Placar */}
        <Text style={styles.score}>
          {homeScore} - {awayScore}
        </Text>
        <View style={styles.teamContainer}>
          {/* Logo do time visitante */}
          <Image source={{ uri: awayTeam.logoUrl }} style={styles.teamLogo} />
          {/* Nome do time visitante */}
          <Text style={styles.teamName}>{awayTeam.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  card: {
    width: '70%', // Define a largura do card como 80% da largura da tela
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
});

export default GameCard;
