import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet } from 'react-native';

import GameCard from '../components/GameCard';
import Header from '../components/Header';
import Campeonatos from '../components/Campeonatos';

const games = [
  {
    homeTeam: { name: 'VIT', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_48x48.png' },
    awayTeam: { name: 'CAM', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png' },
    homeScore: 4,
    awayScore: 2,
  },
  {
    homeTeam: { name: 'CRU', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_48x48.png' },
    awayTeam: { name: 'FLU', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png' },
    homeScore: 2,
    awayScore: 0,
  },
  {
    homeTeam: { name: 'FLA', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png' },
    awayTeam: { name: 'BAH', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_48x48.png' },
    homeScore: 2,
    awayScore: 1,
  },
  // Outros jogos...
];

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Campeonatos navigation={navigation} />
        <FlatList
          data={games}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => 
            <GameCard 
              homeTeam={item.homeTeam}
              awayTeam={item.awayTeam}
              homeScore={item.homeScore}
              awayScore={item.awayScore}
              navigation={navigation}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  content: {
    flex: 1, 
    padding: 16, 
  },
});

export default Homepage;
