import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const SerieB = [
  { team: 'América-MG', games: 11, wins: 6, draws: 3, losses: 2, points: 21, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/xE2RajzsCEoen1wz8g8rhg_48x48.png' },
  { team: 'Avaí', games: 11, wins: 6, draws: 3, losses: 2, points: 21, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9cwCmoBXGaPJ_Q5cgUeocg_48x48.png' },
  { team: 'Operário', games: 11, wins: 6, draws: 3, losses: 2, points: 21, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/GmLvorr4MqC4aRinQQ4Mdw_48x48.png' },
  { team: 'Sport Recife', games: 10, wins: 6, draws: 1, losses: 3, points: 19, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u9Ydy0qt6JJjWhTaI6r10A_48x48.png' },
  { team: 'Santos', games: 11, wins: 6, draws: 0, losses: 5, points: 18, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/VHdNOT6wWOw_vJ38GMjMzg_48x48.png' },
  { team: 'Goiás', games: 11, wins: 5, draws: 3, losses: 3, points: 18, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_48x48.png' },
  { team: 'Coritiba', games: 11, wins: 5, draws: 3, losses: 3, points: 18, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LaFlBADLmsjHfGTehCYtuA_48x48.png' },
  { team: 'Mirassol', games: 11, wins: 5, draws: 2, losses: 4, points: 17, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/5J3JY7fcdiDYU5rbPW7AKA_48x48.png' },
  { team: 'Vila Nova', games: 11, wins: 5, draws: 2, losses: 4, points: 17, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/v3upsCABZm2skuxyszzvwg_48x48.png' },
  { team: 'Ceará SC', games: 11, wins: 4, draws: 4, losses: 3, points: 16, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_48x48.png' },
  { team: 'Novorizontino', games: 11, wins: 4, draws: 3, losses: 4, points: 15, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/2YeE0Oupr5ApZJR0CyX_3g_48x48.png' },
  { team: 'Chapecoense', games: 11, wins: 3, draws: 5, losses: 3, points: 14, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/K7JQUKTRsuXfO9YrD5dq5g_48x48.png' },
  { team: 'Botafogo SP', games: 10, wins: 3, draws: 4, losses: 3, points: 13, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/VYXHOgQwI7tw3EyFlWngWg_48x48.png' },
  { team: 'Ponte Preta', games: 11, wins: 3, draws: 3, losses: 5, points: 12, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/BJIn62x7CfqvGCCDHtaCqg_48x48.png' },
  { team: 'Amazonas FC', games: 11, wins: 3, draws: 3, losses: 5, points: 12, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/uuUY0RAXejVcckwdPoVyBQ_48x48.png' },
  { team: 'Paysandu', games: 11, wins: 2, draws: 6, losses: 3, points: 12, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/1aw29215gcFtsyu07fCifw_48x48.png' },
  { team: 'Brusque', games: 11, wins: 2, draws: 4, losses: 5, points: 10, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/ykKt1U6PEpMP7iiXwZvdBQ_48x48.png' },
  { team: 'CRB', games: 9, wins: 2, draws: 3, losses: 4, points: 9, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/zEM-aepnkjTSoBMW9LH_Qw_48x48.png' },
  { team: 'Ituano', games: 11, wins: 2, draws: 1, losses: 8, points: 7, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/d_-UoAOHszNZufgbaFSLXQ_48x48.png' },
  { team: 'Guarani', games: 11, wins: 1, draws: 2, losses: 8, points: 5, logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fxJElzuqyxKVwsUcfsC49Q_48x48.png' },
];

const SerieBTable = () => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.clubColumn}>Clube</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>Pts</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>PJ</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>VIT</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>EMP</DataTable.Title>
          <DataTable.Title style={styles.compactColumn} numeric>DER</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={SerieB}
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

export default SerieBTable;
