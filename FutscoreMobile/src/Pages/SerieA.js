import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const SerieA = [
  { team: 'Atlético Paranaense', games: 6, wins: 4, draws: 1, losses: 1, points: 13, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_24x24.png' },
  { team: 'Bahia', games: 6, wins: 4, draws: 1, losses: 1, points: 13, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_24x24.png' },
  { team: 'Flamengo', games: 6, wins: 3, draws: 2, losses: 1, points: 11, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_24x24.png' },
  { team: 'Botafogo', games: 6, wins: 3, draws: 1, losses: 2, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/j3lRjFqECj0waFZfnsyg1A_24x24.png' },
  { team: 'São Paulo', games: 6, wins: 3, draws: 1, losses: 2, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/s5TClOZN5-dz5xUeMub_Lw_24x24.png' },
  { team: 'Cruzeiro', games: 5, wins: 3, draws: 1, losses: 1, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_48x48.png' },
  { team: 'Atlético-MG', games: 5, wins: 2, draws: 3, losses: 0, points: 9, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/j3lRjFqECj0waFZfnsyg1A_96x96.png' },
  { team: 'RB Bragantino', games: 6, wins: 2, draws: 3, losses: 1, points: 9, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/j3lRjFqECj0waFZfnsyg1A_96x96.png' },
  { team: 'Palmeiras', games: 6, wins: 2, draws: 2, losses: 2, points: 8, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_96x96.png' },
  { team: 'Internacional', games: 4, wins: 2, draws: 1, losses: 1, points: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nXi3Tkm-oLpXh9yMzvZwFQ_96x96.png' },
  { team: 'Fortaleza EC', games: 5, wins: 1, draws: 4, losses: 0, points: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_96x96.png' },
  { team: 'Grêmio', games: 4, wins: 2, draws: 0, losses: 2, points: 6, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_96x96.png' },
  { team: 'Vasco da Gama', games: 6, wins: 2, draws: 0, losses: 4, points: 6, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/2tLgBzJNpWhzwIqkNb8nBQ_96x96.png' },
  { team: 'Criciúma', games: 3, wins: 1, draws: 2, losses: 0, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/BChN4yf3zwyiMkj5xL4pIg_96x96.png' },
  { team: 'Juventude', games: 4, wins: 1, draws: 2, losses: 1, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/2tLgBzJNpWhzwIqkNb8nBQ_96x96.png' },
  { team: 'Corinthians', games: 6, wins: 1, draws: 2, losses: 3, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
  { team: 'Fluminense', games: 6, wins: 1, draws: 2, losses: 3, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/edrB5RlpgImexYTh2nklPA_96x96.png' },
  { team: 'Vitória', games: 5, wins: 0, draws: 1, losses: 4, points: 1, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/_UukGr-o3S9ET5J8F32Xhg_96x96.png' },
  { team: 'Atlético Goianiense', games: 5, wins: 0, draws: 1, losses: 4, points: 1, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_96x96.png' },
  { team: 'Cuiabá', games: 4, wins: 0, draws: 0, losses: 4, points: 0, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_96x96.png' },
];

const StatsTable = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Clube</DataTable.Title>
          <DataTable.Title numeric>PJ</DataTable.Title>
          <DataTable.Title numeric>VIT</DataTable.Title>
          <DataTable.Title numeric>EMP</DataTable.Title>
          <DataTable.Title numeric>DER</DataTable.Title>
          <DataTable.Title numeric>Pts</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={SerieA}
          keyExtractor={(item) => item.team}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell style={styles.teamCell}>
                <Image style={styles.logo} source={{ uri: item.logoUrl }} />
                <Text>{item.team}</Text>
              </DataTable.Cell>
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
  teamCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 6,
  },
});

export default StatsTable;
