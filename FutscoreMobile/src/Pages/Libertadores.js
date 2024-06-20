import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const placeholderLogoUrl = 'https://via.placeholder.com/40';

const Libertadores = ({ navigation }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const handleNextDate = () => {
    if (selectedDateIndex < libertadoresStages.length - 1) {
      setSelectedDateIndex(selectedDateIndex + 1);
    }
  };

  const handlePreviousDate = () => {
    if (selectedDateIndex > 0) {
      setSelectedDateIndex(selectedDateIndex - 1);
    }
  };

  const libertadoresStages = [
    {
      date: 'SEMANA 31/07',
      round: 'OITAVAS-DE-FINAL',
      matches: Array(8).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'SEMANA 07/08',
      round: 'OITAVAS-DE-FINAL',
      matches: Array(8).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'A DEFINIR',
      round: 'QUARTAS-DE-FINAL',
      matches: Array(4).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'A DEFINIR',
      round: 'SEMI-FINAL',
      matches: Array(2).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'A DEFINIR',
      round: 'FINAL',
      matches: Array(1).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Libertadores</Text>
      </View>
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={handlePreviousDate}>
          <Text style={styles.navigationButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{libertadoresStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate}>
          <Text style={styles.navigationButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stageContainer}>
        <Text style={styles.roundTitle}>{libertadoresStages[selectedDateIndex].round}</Text>
        {libertadoresStages[selectedDateIndex].matches.map((match, index) => (
          <View key={index} style={styles.matchContainer}>
            <GameCard
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              homeScore={match.homeScore}
              awayScore={match.awayScore}
              navigation={navigation}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const GameCard = ({ homeTeam, awayTeam, homeScore, awayScore, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Estatisticas', { homeTeam, awayTeam, homeScore, awayScore })}>
      <View style={styles.card}>
        <View style={styles.teamContainer}>
          <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{homeTeam.name}</Text>
        </View>
        <Text style={styles.score}>
          {homeScore !== null && awayScore !== null ? `${homeScore} - ${awayScore}` : 'X'}
        </Text>
        <View style={styles.teamContainer}>
          <Image source={{ uri: awayTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{awayTeam.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: '#0033a0',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  navigationButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  stageContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  roundTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  matchContainer: {
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Libertadores;
