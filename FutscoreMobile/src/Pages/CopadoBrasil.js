import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const placeholderLogoUrl = 'https://via.placeholder.com/40';

const CopadoBrasil = ({ navigation }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const handleNextDate = () => {
    if (selectedDateIndex < copaDoBrasilStages.length - 1) {
      setSelectedDateIndex(selectedDateIndex + 1);
    }
  };

  const handlePreviousDate = () => {
    if (selectedDateIndex > 0) {
      setSelectedDateIndex(selectedDateIndex - 1);
    }
  };

  const copaDoBrasilStages = [
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
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={handlePreviousDate} disabled={selectedDateIndex === 0}>
          <Text style={[styles.navigationText, selectedDateIndex === 0 && styles.disabledText]}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{copaDoBrasilStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate} disabled={selectedDateIndex === copaDoBrasilStages.length - 1}>
          <Text style={[styles.navigationText, selectedDateIndex === copaDoBrasilStages.length - 1 && styles.disabledText]}>Próxima</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stageContainer}>
        {copaDoBrasilStages[selectedDateIndex].matches.map((match, index) => (
          <View key={index} style={styles.matchContainer}>
            <GameCard
              date={match.date}
              time={match.time}
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

const GameCard = ({ date, time, homeTeam, awayTeam, homeScore, awayScore, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Estatisticas', { homeTeam, awayTeam, homeScore, awayScore })}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.dateTimeText}>{time} - {date}</Text>
        </View>
        <View style={styles.matchDetails}>
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  navigationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  disabledText: {
    opacity: 0.5,
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
  matchContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  matchDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
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

export default CopadoBrasil;
