import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

// Dados dos jogos simulados
const games = [
  {
    homeTeam: { name: 'CAM', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_96x96.png' },
    awayTeam: { name: 'FLA', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_96x96.png' },
    homeScore: 2,
    awayScore: 1,
  },
  {
    homeTeam: { name: 'CRU', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' },
    awayTeam: { name: 'FOR', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_96x96.png' },
    homeScore: 3,
    awayScore: 3,
  },
  {
    homeTeam: { name: 'COR', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_96x96.png' },
    awayTeam: { name: 'GRE', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_96x96.png' },
    homeScore: 0,
    awayScore: 0,
  },
  // Outros jogos...
];

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

  // Dados da Copa do Brasil com algumas etapas modificadas para mostrar os dados de games
  const copaDoBrasilStages = [
    {
      date: '2024-06-20',
      round: 'Oitavas de Final',
      matches: games.slice(0, 2), // Substitui as oitavas de final com os dois primeiros jogos de games
    },
    {
      date: '2024-07-04',
      round: 'Quartas de Final',
      matches: games.slice(2, 4), // Substitui as quartas de final com os dois próximos jogos de games
    },
    {
      date: '2024-08-01',
      round: 'Semifinais',
      matches: games.slice(4, 6), // Substitui as semifinais com os dois próximos jogos de games
    },
    // Mais etapas da Copa do Brasil aqui...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {/* Banner da Copa do Brasil */}
        <Text style={styles.bannerText}>Copa do Brasil</Text>
      </View>
      <View style={styles.dateNavigation}>
        {/* Navegação de datas */}
        <TouchableOpacity onPress={handlePreviousDate}>
          <Text style={styles.navigationButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{copaDoBrasilStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate}>
          <Text style={styles.navigationButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stageContainer}>
        {/* Lista de jogos por etapa */}
        <Text style={styles.roundTitle}>{copaDoBrasilStages[selectedDateIndex].round}</Text>
        {copaDoBrasilStages[selectedDateIndex].matches.map((match, index) => (
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
      </View>
    </View>
  );
};

const GameCard = ({ homeTeam, awayTeam, homeScore, awayScore, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Estatisticas', { homeTeam, awayTeam, homeScore, awayScore })}>
      <View style={styles.card}>
        <View style={styles.teamContainer}>
          {/* Componente de time da casa */}
          <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{homeTeam.name}</Text>
        </View>
        <Text style={styles.score}>
          {homeScore} - {awayScore}
        </Text>
        <View style={styles.teamContainer}>
          {/* Componente de time visitante */}
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
    backgroundColor: '#228B22',
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
    color: '#228B22',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228B22',
  },
  stageContainer: {
    paddingHorizontal: 20,
  },
  roundTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#228B22',
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

export default CopadoBrasil;
