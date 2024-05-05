import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';
import Campeonatos from '../components/Campeonatos';
import Navbar from '../components/NavBar';

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
  // Outros jogos...
];

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Navbar title={'FutScore'} />
      <View style={styles.contentContainer}>
        <Campeonatos />
        <FlatList
          data={games}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <GameCard
              homeTeam={item.homeTeam}
              awayTeam={item.awayTeam}
              homeScore={item.homeScore}
              awayScore={item.awayScore}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  contentContainer: {
    flex: 1
  }
});

export default Homepage;
