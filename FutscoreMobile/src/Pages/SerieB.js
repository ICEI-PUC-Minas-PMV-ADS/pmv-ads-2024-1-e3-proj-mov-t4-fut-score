import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const SerieB = [
  { rank: 1, team: 'América-MG', games: 11, wins: 6, draws: 3, losses: 2, points: 21, goalsFor: 16, goalsAgainst: 10, goalDifference: 6, last5: 'DerrotaVitóriasVitóriasDerrotaVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/xE2RajzsCEoen1wz8g8rhg_48x48.png' },
  { rank: 2, team: 'Avaí', games: 11, wins: 6, draws: 3, losses: 2, points: 21, goalsFor: 11, goalsAgainst: 7, goalDifference: 4, last5: 'EmpatesVitóriasEmpatesVitóriasVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9cwCmoBXGaPJ_Q5cgUeocg_48x48.png' },
  { rank: 3, team: 'Operário', games: 12, wins: 6, draws: 3, losses: 3, points: 21, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, last5: 'DerrotaVitóriasVitóriasVitóriasVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/GmLvorr4MqC4aRinQQ4Mdw_48x48.png' },
  { rank: 4, team: 'Sport Recife', games: 10, wins: 6, draws: 1, losses: 3, points: 19, goalsFor: 13, goalsAgainst: 9, goalDifference: 4, last5: 'EmpatesVitóriasVitóriasDerrotaDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u9Ydy0qt6JJjWhTaI6r10A_48x48.png' },
  { rank: 5, team: 'Santos', games: 11, wins: 6, draws: 0, losses: 5, points: 18, goalsFor: 19, goalsAgainst: 11, goalDifference: 8, last5: 'VitóriasDerrotaDerrotaDerrotaDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6wWOw_vJ38GMjMzg_48x48.png' },
  { rank: 6, team: 'Goiás', games: 11, wins: 5, draws: 3, losses: 3, points: 18, goalsFor: 17, goalsAgainst: 8, goalDifference: 9, last5: 'DerrotaEmpatesDerrotaVitóriasDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_48x48.png' },
  { rank: 7, team: 'Coritiba', games: 11, wins: 5, draws: 3, losses: 3, points: 18, goalsFor: 12, goalsAgainst: 7, goalDifference: 5, last5: 'VitóriasEmpatesVitóriasDerrotaVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LaFlBADLmsjHfGTehCYtuA_48x48.png' },
  { rank: 8, team: 'Mirassol', games: 11, wins: 5, draws: 2, losses: 4, points: 17, goalsFor: 12, goalsAgainst: 9, goalDifference: 3, last5: 'DerrotaDerrotaVitóriasVitóriasDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/5J3JY7fcdiDYU5rbPW7AKA_48x48.png' },
  { rank: 9, team: 'Vila Nova', games: 11, wins: 5, draws: 2, losses: 4, points: 17, goalsFor: 13, goalsAgainst: 13, goalDifference: 0, last5: 'VitóriasDerrotaVitóriasEmpatesEmpates', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/v3upsCABZm2skuxyszzvwg_48x48.png' },
  { rank: 10, team: 'Ceará SC', games: 11, wins: 4, draws: 4, losses: 3, points: 16, goalsFor: 15, goalsAgainst: 12, goalDifference: 3, last5: 'EmpatesDerrotaDerrotaVitóriasVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_48x48.png' },
  { rank: 11, team: 'Botafogo SP', games: 11, wins: 4, draws: 4, losses: 3, points: 16, goalsFor: 8, goalsAgainst: 10, goalDifference: -2, last5: 'VitóriasVitóriasVitóriasVitóriasDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/VYXHOgQwI7tw3EyFlWngWg_48x48.png' },
  { rank: 12, team: 'Novorizontino', games: 11, wins: 4, draws: 3, losses: 4, points: 15, goalsFor: 11, goalsAgainst: 12, goalDifference: -1, last5: 'EmpatesDerrotaVitóriasEmpatesVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/2YeE0Oupr5ApZJR0CyX_3g_48x48.png' },
  { rank: 13, team: 'Chapecoense', games: 11, wins: 3, draws: 5, losses: 3, points: 14, goalsFor: 9, goalsAgainst: 9, goalDifference: 0, last5: 'DerrotaVitóriasEmpatesEmpatesDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/K7JQUKTRsuXfO9YrD5dq5g_48x48.png' },
  { rank: 14, team: 'CRB', games: 10, wins: 3, draws: 3, losses: 4, points: 12, goalsFor: 12, goalsAgainst: 13, goalDifference: -1, last5: 'VitóriasEmpatesDerrotaDerrotaVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/zEM-aepnkjTSoBMW9LH_Qw_48x48.png' },
  { rank: 15, team: 'Ponte Preta', games: 11, wins: 3, draws: 3, losses: 5, points: 12, goalsFor: 11, goalsAgainst: 15, goalDifference: -4, last5: 'DerrotaVitóriasDerrotaVitóriasDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/BJIn62x7CfqvGCCDHtaCqg_48x48.png' },
  { rank: 16, team: 'Amazonas FC', games: 11, wins: 3, draws: 3, losses: 5, points: 12, goalsFor: 9, goalsAgainst: 13, goalDifference: -4, last5: 'EmpatesDerrotaVitóriasDerrotaVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/uuUY0RAXejVcckwdPoVyBQ_48x48.png' },
  { rank: 17, team: 'Paysandu', games: 11, wins: 2, draws: 6, losses: 3, points: 12, goalsFor: 12, goalsAgainst: 12, goalDifference: 0, last5: 'EmpatesVitóriasDerrotaVitóriasEmpates', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/1aw29215gcFtsyu07fCifw_48x48.png' },
  { rank: 18, team: 'Brusque', games: 11, wins:2, draws: 4, losses: 5, points: 10, goalsFor: 8, goalsAgainst: 16, goalDifference: -8, last5: 'EmpatesVitóriasDerrotaEmpatesEmpates', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/ykKt1U6PEpMP7iiXwZvdBQ_48x48.png' },
  { rank: 19, team: 'Ituano', games: 11, wins: 2, draws: 1, losses: 8, points: 7, goalsFor: 13, goalsAgainst: 25, goalDifference: -12, last5: 'EmpatesDerrotaDerrotaDerrotaVitórias', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/d_-UoAOHszNZufgbaFSLXQ_48x48.png' },
  { rank: 20, team: 'Guarani', games: 12, wins: 1, draws: 2, losses: 9, points: 5, goalsFor: 9, goalsAgainst: 21, goalDifference: -12, last5: 'DerrotaEmpatesDerrotaDerrotaDerrota', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fxJElzuqyxKVwsUcfsC49Q_48x48.png' },
];

const SerieBTable = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.rankColumn}>Rank</DataTable.Title>
          <DataTable.Title style={styles.clubColumn}>Clube</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>Pts</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>PJ</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>VIT</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>EMP</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>DER</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>SG</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={SerieB}
          keyExtractor={(item) => item.team}
          renderItem={({ item }) => (
            <DataTable.Row>
              <DataTable.Cell style={styles.rankColumn}>{item.rank}</DataTable.Cell>
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
          // Adicionando espaço extra no final da lista
          ListFooterComponent={<View style={{ height: 100 }} />}
          // Defina o estilo contentContainerStyle para evitar problemas com ScrollView aninhado
          contentContainerStyle={styles.flatListContent}
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
  rankColumn: {
    flex: 0.5,
  },
  teamCell: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
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
    flex: 3,
  },
  compactColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListContent: {
    flexGrow: 1,
  },
});

export default SerieBTable;
