// src/Pages/StatsTable.js
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';


const SerieA = [
  { team: 'Atlético Paranaense', games: 6, wins: 4, draws: 1, losses: 1, points: 13 },
  { team: 'Bahia', games: 6, wins: 4, draws: 1, losses: 1, points: 13 },
  { team: 'Flamengo', games: 6, wins: 3, draws: 2, losses: 1, points: 11 },
  { team: 'Botafogo', games: 6, wins: 3, draws: 1, losses: 2, points: 10 },
  { team: 'São Paulo', games: 6, wins: 3, draws: 1, losses: 2, points: 10 },
  { team: 'Cruzeiro', games: 5, wins: 3, draws: 1, losses: 1, points: 10 },
  { team: 'Atlético-MG', games: 5, wins: 2, draws: 3, losses: 0, points: 9 },
  { team: 'RB Bragantino', games: 6, wins: 2, draws: 3, losses: 1, points: 9 },
  { team: 'Palmeiras', games: 6, wins: 2, draws: 2, losses: 2, points: 8 },
  { team: 'Internacional', games: 4, wins: 2, draws: 1, losses: 1, points: 7 },
  { team: 'Fortaleza EC', games: 5, wins: 1, draws: 4, losses: 0, points: 7 },
  { team: 'Grêmio', games: 4, wins: 2, draws: 0, losses: 2, points: 6 },
  { team: 'Vasco da Gama', games: 6, wins: 2, draws: 0, losses: 4, points: 6 },
  { team: 'Criciúma', games: 3, wins: 1, draws: 2, losses: 0, points: 5 },
  { team: 'Juventude', games: 4, wins: 1, draws: 2, losses: 1, points: 5 },
  { team: 'Corinthians', games: 6, wins: 1, draws: 2, losses: 3, points: 5 },
  { team: 'Fluminense', games: 6, wins: 1, draws: 2, losses: 3, points: 5 },
  { team: 'Vitória', games: 5, wins: 0, draws: 1, losses: 4, points: 1 },
  { team: 'Atlético Goianiense', games: 5, wins: 0, draws: 1, losses: 4, points: 1 },
  { team: 'Cuiabá', games: 4, wins: 0, draws: 0, losses: 4, points: 0 },
];

const StatsTable = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Time</DataTable.Title>
          <DataTable.Title numeric>Jogos</DataTable.Title>
          <DataTable.Title numeric>Vitórias</DataTable.Title>
          <DataTable.Title numeric>Empates</DataTable.Title>
          <DataTable.Title numeric>Derrotas</DataTable.Title>
          <DataTable.Title numeric>Pontos</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={SerieA} // Use the SerieA data
          keyExtractor={(item) => item.team}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell>{item.team}</DataTable.Cell>
              <DataTable.Cell numeric>{item.games}</DataTable.Cell>
              <DataTable.Cell numeric>{item.wins}</DataTable.Cell>
              <DataTable.Cell numeric>{item.draws}</DataTable.Cell>
              <DataTable.Cell numeric>{item.losses}</DataTable.Cell>
              <DataTable.Cell numeric>{item.points}</DataTable.Cell>
            </DataTable.Row>
          )}
        />
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default StatsTable;
