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
      date: '3º Fase',
      matches: [
        {
          date: '30/04',
          time: '20:00',
          homeTeam: { name: 'Operário-PR', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Grêmio', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 0,
        },
        {
          date: '13/07',
          time: '19:00',
          homeTeam: { name: 'Grêmio', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Operário-PR', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '30/04',
          time: '19:00',
          homeTeam: { name: 'Bahia', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Criciúma', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '23/05',
          time: '19:00',
          homeTeam: { name: 'Criciúma', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Bahia', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 2,
        },
        {
          date: '01/05',
          time: '16:00',
          homeTeam: { name: 'Sampaio Corrêa', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Fluminense', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 2,
        },
        {
          date: '22/05',
          time: '19:00',
          homeTeam: { name: 'Fluminense', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Sampaio Corrêa', logoUrl: placeholderLogoUrl },
          homeScore: 2,
          awayScore: 0,
        },
        {
          date: '01/05',
          time: '18:00',
          homeTeam: { name: 'Sousa', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Bragantino', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 1,
        },
        {
          date: '21/05',
          time: '19:30',
          homeTeam: { name: 'Bragantino', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Sousa', logoUrl: placeholderLogoUrl },
          homeScore: 3,
          awayScore: 0,
        },
        {
          date: '02/05',
          time: '21:30',
          homeTeam: { name: 'Goiás', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Cuiabá', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '23/05',
          time: '19:30',
          homeTeam: { name: 'Cuiabá', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Goiás', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '02/05',
          time: '19:00',
          homeTeam: { name: 'Botafogo', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Vitória', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '22/05',
          time: '19:00',
          homeTeam: { name: 'Vitória', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Botafogo', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 2,
        },
        {
          date: '01/05',
          time: '19:00',
          homeTeam: { name: 'Fortaleza', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Vasco', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 0,
        },
        {
          date: '21/05',
          time: '21:30',
          homeTeam: { name: 'Vasco', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Fortaleza', logoUrl: placeholderLogoUrl },
          homeScore: 3,
          awayScore: 3,
        },
        {
          date: '01/05',
          time: '21:30',
          homeTeam: { name: 'Flamengo', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Amazonas', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '22/05',
          time: '21:30',
          homeTeam: { name: 'Amazonas', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Flamengo', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 1,
        },
        {
          date: '02/05',
          time: '19:30',
          homeTeam: { name: 'Águia de Marabá', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'São Paulo', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 3,
        },
        {
          date: '23/05',
          time: '21:30',
          homeTeam: { name: 'São Paulo', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Águia de Marabá', logoUrl: placeholderLogoUrl },
          homeScore: 2,
          awayScore: 0,
        },
        {
          date: '02/05',
          time: '21:30',
          homeTeam: { name: 'Palmeiras', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Botafogo-SP', logoUrl: placeholderLogoUrl },
          homeScore: 2,
          awayScore: 1,
        },
        {
          date: '23/05',
          time: '19:00',
          homeTeam: { name: 'Botafogo-SP', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Palmeiras', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 0,
        },
        {
          date: '01/05',
          time: '18:00',
          homeTeam: { name: 'Ypiranga-RS', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Athletico-PR', logoUrl: placeholderLogoUrl },
          homeScore: 2,
          awayScore: 1,
        },
        {
          date: '13/07',
          time: '18:00',
          homeTeam: { name: 'Athletico-PR', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Ypiranga-RS', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '10/07',
          time: '19:00',
          homeTeam: { name: 'Internacional', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Juventude', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '13/07',
          time: '16:00',
          homeTeam: { name: 'Juventude', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Internacional', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '02/05',
          time: '20:30',
          homeTeam: { name: 'CRB', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Ceará', logoUrl: placeholderLogoUrl },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '23/05',
          time: '21:30',
          homeTeam: { name: 'Ceará', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'CRB', logoUrl: placeholderLogoUrl },
          homeScore: 0,
          awayScore: 1,
        },
      ],
    },
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
