import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const SerieA = [
  { rank: 1, team: 'Flamengo', games: 10, wins: 6, draws: 3, losses: 1, points: 21, goalDifference: 9, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png' },
  { rank: 2, team: 'Palmeiras', games: 10, wins: 6, draws: 2, losses: 2, points: 20, goalDifference: 8, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png' },
  { rank: 3, team: 'Botafogo', games: 11, wins: 6, draws: 2, losses: 3, points: 20, goalDifference: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png' },
  { rank: 4, team: 'Athletico-PR', games: 10, wins: 5, draws: 3, losses: 2, points: 18, goalDifference: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9LkdBR4L5plovKM8eIy7nQ_48x48.png' },
  { rank: 5, team: 'Bahia', games: 10, wins: 5, draws: 3, losses: 2, points: 18, goalDifference: 3, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_48x48.png' },
  { rank: 6, team: 'Internacional', games: 9, wins: 5, draws: 2, losses: 2, points: 17, goalDifference: 3, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png' },
  { rank: 7, team: 'Cruzeiro', games: 9, wins: 5, draws: 2, losses: 2, points: 17, goalDifference: 2, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' },
  { rank: 8, team: 'São Paulo', games: 10, wins: 4, draws: 3, losses: 3, points: 15, goalDifference: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png' },
  { rank: 9, team: 'RB Bragantino', games: 10, wins: 4, draws: 3, losses: 3, points: 15, goalDifference: 2, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_48x48.png' },
  { rank: 10, team: 'Atlético-MG', games: 9, wins: 3, draws: 4, losses: 2, points: 13, goalDifference: 1, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png' },
  { rank: 11, team: 'Juventude', games: 9, wins: 3, draws: 4, losses: 2, points: 13, goalDifference: 0, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_48x48.png' },
  { rank: 12, team: 'Fortaleza EC', games: 9, wins: 3, draws: 4, losses: 2, points: 13, goalDifference: -3, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png' },
  { rank: 13, team: 'Criciúma', games: 8, wins: 2, draws: 3, losses: 3, points: 9, goalDifference: 0, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u_L7Mkp33uNmFTv3uUlXeQ_48x48.png' },
  { rank: 14, team: 'Cuiabá', games: 10, wins: 3, draws: 1, losses: 6, points: 10, goalDifference: -3, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_48x48.png' },
  { rank: 15, team: 'EC Vitória', games: 10, wins: 2, draws: 3, losses: 5, points: 9, goalDifference: -5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_48x48.png' },
  { rank: 16, team: 'Atlético GO', games: 10, wins: 2, draws: 2, losses: 6, points: 8, goalDifference: -5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9mqMGndwoR9og_Z0uEl2kw_48x48.png' },
  { rank: 17, team: 'Vasco da Gama', games: 10, wins: 2, draws: 1, losses: 7, points: 7, goalDifference: -14, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/hHwT8LwRmYCAGxQ-STLxYA_48x48.png' },
  { rank: 18, team: 'Corinthians', games: 10, wins: 1, draws: 4, losses: 5, points: 7, goalDifference: -4, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
  { rank: 19, team: 'Grêmio', games: 9, wins: 2, draws: 0, losses: 7, points: 6, goalDifference: -5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png' },
  { rank: 20, team: 'Fluminense', games: 10, wins: 1, draws: 3, losses: 6, points: 6, goalDifference: -8, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png' },
];

const StatsTable = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.rankColumn}>P</DataTable.Title>
          <DataTable.Title style={styles.clubColumn}>Clube</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>Pts</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>PJ</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>V</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>E</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>D</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>SG</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={SerieA}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell style={styles.rankCell}>{item.rank}</DataTable.Cell>
              <DataTable.Cell style={styles.teamCell}>
                <Image style={styles.logo} source={{ uri: item.logoUrl }} onError={() => console.log(`Error loading image for ${item.team}`)} />
                <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">{item.team}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.points}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.games}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.wins}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.draws}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.losses}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.goalDifference}</DataTable.Cell>
            </DataTable.Row>
          )}
          ListFooterComponent={<View style={{ height: 100 }} />} // Adicionando espaço extra no final
        />
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  teamCell: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 5,
  },
  rankCell: {
    flex: 0.6,
  },
  logo: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  teamText: {
    flex: 1,
    flexWrap: 'wrap',
  },
  clubColumn: {
    flex: 4,
  },
  rankColumn: {
    flex: 0.5,
  },
  compactColumn: {
    flex: 1,
  },
});

export default StatsTable;
