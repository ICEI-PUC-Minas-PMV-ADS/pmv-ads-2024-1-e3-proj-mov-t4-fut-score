import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const GameCard = ({ homeTeam, awayTeam, homeScore, awayScore, hora, local }) => {
  return (
    <View style={styles.card}>
      {hora && local && (
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>Hora: {hora}</Text>
          <Text style={styles.details}>Local: {local}</Text>
        </View>
      )}
      <View style={styles.teamContainer}>
        <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
        <Text style={styles.teamName}>{homeTeam.name}</Text>
      </View>
      <Text style={styles.score}>{homeScore} - {awayScore}</Text>
      <View style={styles.teamContainer}>
        <Image source={{ uri: awayTeam.logoUrl }} style={styles.teamLogo} />
        <Text style={styles.teamName}>{awayTeam.name}</Text>
      </View>
    </View>
  );
};

const MeuTime = () => {
  const jogos = [
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
  ];

  const proximosJogos = [
    {
      homeTeam: { name: 'CRU', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' },
      awayTeam: { name: 'CAM', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_96x96.png' },
      local: 'Mineirão',
      hora: '19:00',
    },
    {
      homeTeam: { name: 'FLA', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_96x96.png' },
      awayTeam: { name: 'CRU', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' },
      local: 'Maracanã',
      hora: '21:00',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Time</Text>
        <Image source={{ uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' }} style={styles.logo} />
      </View>

      <View style={styles.section}>
        <View style={styles.championship}>
          <Image style={styles.championshipLogo} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png' }} />
          <Text style={styles.sectionTitle}>Brasileirão</Text>
        </View>
        <Text style={styles.classification}>4º lugar</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.championship}>
          <Image style={styles.championshipLogo} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/copa-do-brasil.png' }} />
          <Text style={styles.sectionTitle}>Copa do Brasil</Text>
        </View>
        <Text style={styles.classification}>Oitavas</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.marginBottom]}>Últimos Jogos</Text>
        {jogos.map((jogo, index) => (
          <GameCard
            key={index}
            homeTeam={jogo.homeTeam}
            awayTeam={jogo.awayTeam}
            homeScore={jogo.homeScore}
            awayScore={jogo.awayScore}
          />
        ))}
      </View>
      
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.marginBottom]}>Próximos Jogos</Text>
        {proximosJogos.map((jogo, index) => (
          <GameCard
            key={index}
            homeTeam={jogo.homeTeam}
            awayTeam={jogo.awayTeam}
            homeScore={'?'}
            awayScore={'?'}
            hora={jogo.hora}
            local={jogo.local}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  section: {
    marginBottom: 24,
  },
  championship: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  championshipLogo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  marginBottom: {
    marginBottom: 16,
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
    alignSelf: 'center',
  },
  detailsContainer: {
    position: 'absolute',
    top: 8,
    left: 16,
    right: 16,
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
  nextMatch: {
    alignItems: 'center',
    marginBottom: 16,
  },
  details: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  classification: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
});

export default MeuTime;
