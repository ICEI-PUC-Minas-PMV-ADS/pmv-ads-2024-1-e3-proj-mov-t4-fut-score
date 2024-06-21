import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const placeholderLogoUrl = 'https://via.placeholder.com/40';

const Sulamericana = ({ navigation }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const handleNextDate = () => {
    if (selectedDateIndex < sulamericanaStages.length - 1) {
      setSelectedDateIndex(selectedDateIndex + 1);
    }
  };

  const handlePreviousDate = () => {
    if (selectedDateIndex > 0) {
      setSelectedDateIndex(selectedDateIndex - 1);
    }
  };

  const sulamericanaStages = [
    {
      date: 'OITAVAS-DE-FINAL IDA',
      matches: [
        {
          date: '13/08',
          time: 'A confirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl  },
          awayTeam: { name: 'Independiente M', logoUrl:'https://ssl.gstatic.com/onebox/media/sports/logos/EXzxmE5XPA9zm43tU_q2xg_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: 'A confirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Racing', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/yAhh9CCI7x9DAyQkRJrouA_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: 'A confirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl  },
          awayTeam: { name: 'Fortaleza', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: 'A confirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Sportivo Ameliano', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/6CsuZR3verusrU1Uk3xwMg_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: '21:30',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Belgrano', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/ARRobSqsCAE23mzPdOHJYQ_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: 'A confirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Corinthians', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: 'A confirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Lanús', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/FiqktuVwEcYAOZNp32H-OQ_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: 'A connfirmar',
          homeTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'Cruzeiro', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'OITAVAS-DE-FINAL VOLTA',
      matches: [
        {
          date: '20/08',
          time: 'A confirmar',
          homeTeam: { name: 'Cruzeiro', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '20/08',
          time: 'A confirmar',
          homeTeam: { name: 'Corinthians', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: 'A confirmar',
          homeTeam: { name: 'Fortaleza', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: 'A confirmar',
          homeTeam: { name: 'Belgrano', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/ARRobSqsCAE23mzPdOHJYQ_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: 'A confirmar',
          homeTeam: { name: 'Sportivo Ameliano', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/6CsuZR3verusrU1Uk3xwMg_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: 'A confirmar',
          homeTeam: { name: 'Lanús', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/FiqktuVwEcYAOZNp32H-OQ_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: 'A confirmar',
          homeTeam: { name: 'Independiente M', logoUrl:'https://ssl.gstatic.com/onebox/media/sports/logos/EXzxmE5XPA9zm43tU_q2xg_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: 'A confirmar',
          homeTeam:  { name: 'Racing', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/yAhh9CCI7x9DAyQkRJrouA_48x48.png' },
          awayTeam: { name: 'A confirmar', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'A DEFINIR',
      round: 'QUARTAS-DE-FINAL',
      matches: [
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'A DEFINIR',
      round: 'SEMI-FINAL',
      matches: [
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'A DEFINIR',
      round: 'FINAL',
      matches: [
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={handlePreviousDate} disabled={selectedDateIndex === 0}>
          <Text style={[styles.navigationText, selectedDateIndex === 0 && styles.disabledText]}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{sulamericanaStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate} disabled={selectedDateIndex === sulamericanaStages.length - 1}>
          <Text style={[styles.navigationText, selectedDateIndex === sulamericanaStages.length - 1 && styles.disabledText]}>Próxima</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stageContainer}>
        {sulamericanaStages[selectedDateIndex].matches.map((match, index) => (
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  disabledText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccc',
  },
  dateText: {
    fontSize: 16,
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
    fontSize: 14,
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

export default Sulamericana;