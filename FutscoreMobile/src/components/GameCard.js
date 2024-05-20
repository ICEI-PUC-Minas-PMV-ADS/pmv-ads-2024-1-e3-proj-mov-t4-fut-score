import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GameCard = ({ homeTeam, awayTeam, homeScore, awayScore, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Estatisticas', { homeTeam, awayTeam, homeScore, awayScore })}>
      <View style={styles.container}>
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '70%',
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
