import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const SerieA = [
  { team: 'Alético Paranaense', games: 6, wins: 4, draws: 1, losses: 1, points: 13, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9LkdBR4L5plovKM8eIy7nQ_48x48.png' },
  { team: 'Bahia', games: 6, wins: 4, draws: 1, losses: 1, points: 13, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_48x48.png' },
  { team: 'Flamengo', games: 6, wins: 3, draws: 2, losses: 1, points: 11, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png' },
  { team: 'Botafogo', games: 6, wins: 3, draws: 1, losses: 2, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png' },
  { team: 'São Paulo', games: 6, wins: 3, draws: 1, losses: 2, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png' },
  { team: 'Cruzeiro', games: 5, wins: 3, draws: 1, losses: 1, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_96x96.png' },
  { team: 'Atético-MG', games: 5, wins: 2, draws: 3, losses: 0, points: 9, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png' },
  { team: 'RB Bragantino', games: 6, wins: 2, draws: 3, losses: 1, points: 9, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_48x48.png' },
  { team: 'Palmeiras', games: 6, wins: 2, draws: 2, losses: 2, points: 8, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png' },
  { team: 'Internacional', games: 4, wins: 2, draws: 1, losses: 1, points: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png' },
  { team: 'Fortaleza EC', games: 5, wins: 1, draws: 4, losses: 0, points: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png' },
  { team: 'Grêmio', games: 4, wins: 2, draws: 0, losses: 2, points: 6, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png' },
  { team: 'Vasco da Gama', games: 6, wins: 2, draws: 0, losses: 4, points: 6, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/hHwT8LwRmYCAGxQ-STLxYA_48x48.png' },
  { team: 'Criciúma', games: 3, wins: 1, draws: 2, losses: 0, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u_L7Mkp33uNmFTv3uUlXeQ_48x48.png' },
  { team: 'Juventude', games: 4, wins: 1, draws: 2, losses: 1, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_48x48.png' },
  { team: 'Corinthians', games: 6, wins: 1, draws: 2, losses: 3, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
  { team: 'Fluminense', games: 6, wins: 1, draws: 2, losses: 3, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png' },
  { team: 'Vitória', games: 5, wins: 0, draws: 1, losses: 4, points: 1, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_48x48.png' },
  { team: 'Atlético Goianiense', games: 5, wins: 0, draws: 1, losses: 4, points: 1, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9mqMGndwoR9og_Z0uEl2kw_48x48.png' },
  { team: 'Cuiabá', games: 4, wins: 0, draws: 0, losses: 4, points: 0, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_48x48.png' },
];

const StatsTable = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.clubColumn}>Clube</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>PJ</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>VIT</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>EMP</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>DER</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>Pts</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={SerieA}
          keyExtractor={(item) => item.team}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell style={styles.teamCell}>
                <Image style={styles.logo} source={{ uri: item.logoUrl }} onError={() => console.log(`Error loading image for ${item.team}`)} />
                <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">{item.team}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.games}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.wins}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.draws}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.losses}</DataTable.Cell>
              <DataTable.Cell style={styles.compactColumn} numeric>{item.points}</DataTable.Cell>
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
    padding: 8,
    backgroundColor: '#fff',
  },
  teamCell: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 5,
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
    flex: 5,
  },
  compactColumn: {
    flex: 0.9,
  },
});

export default StatsTable;
