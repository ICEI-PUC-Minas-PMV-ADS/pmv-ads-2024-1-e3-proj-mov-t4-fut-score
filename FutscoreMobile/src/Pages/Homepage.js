import React from 'react';
import { View, FlatList, Text } from 'react-native';
import GameCard from '../components/GameCard';
import Campeonatos from '../components/Campeonatos'

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
    <View style={{ flex: 1, padding: 16 }}>
      <View>
        <Campeonatos />
      </View>

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
  );
};

export default Homepage;