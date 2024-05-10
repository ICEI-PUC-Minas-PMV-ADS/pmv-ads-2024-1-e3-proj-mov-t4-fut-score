import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import Campeonatos from '../components/Campeonatos';

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
    <SafeAreaView style={styles.container}>
      <Header title={'FutScore'} />
      <View style={styles.content}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que a SafeAreaView ocupa todo o espaço da tela
  },
  content: {
    flex: 1, // Permite que o conteúdo abaixo do Header ocupe todo o espaço restante
    padding: 16, // Adiciona um padding interno ao conteúdo
  },
});

export default Homepage;
