import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const copaDoBrasilStages = [
  {
    date: '2024-06-20', // Data dos jogos para esta rodada
    round: 'Oitavas de Final',
    matches: [
      { homeTeam: 'Flamengo', awayTeam: 'Cruzeiro', homeScore: 2, awayScore: 1, advanced: 'Flamengo' },
      { homeTeam: 'São Paulo', awayTeam: 'Palmeiras', homeScore: 1, awayScore: 2, advanced: 'Palmeiras' },
      // Adicione outros jogos da rodada de 16
    ]
  },
  {
    date: '2024-07-04', // Data dos jogos para esta rodada
    round: 'Quartas de Final',
    matches: [
      { homeTeam: 'Flamengo', awayTeam: 'Palmeiras', homeScore: 3, awayScore: 2, advanced: 'Flamengo' },
      { homeTeam: 'Internacional', awayTeam: 'Grêmio', homeScore: 1, awayScore: 1, advanced: 'Internacional' },
      // Adicione outros jogos das quartas de final
    ]
  },
  // Adicione outras rodadas (semi-final, final, etc.)
];

const CopadoBrasil = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const handleNextDate = () => {
    if (selectedDateIndex < copaDoBrasilStages.length - 1) {
      setSelectedDateIndex(selectedDateIndex + 1);
    }
  };

  const handlePreviousDate = () => {
    if (selectedDateIndex > 0) {
      setSelectedDateIndex(selectedDateIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
        <Image style={styles.images} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png' }} />
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={handlePreviousDate}>
          <Text style={styles.navigationButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{copaDoBrasilStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate}>
          <Text style={styles.navigationButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stageContainer}>
        <Text style={styles.roundTitle}>{copaDoBrasilStages[selectedDateIndex].round}</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Time da Casa</DataTable.Title>
            <DataTable.Title numeric>Gols</DataTable.Title>
            <DataTable.Title numeric>Gols</DataTable.Title>
            <DataTable.Title numeric>Visitante</DataTable.Title>
            <DataTable.Title>Avançado</DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={copaDoBrasilStages[selectedDateIndex].matches}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({ item }) => (
              <DataTable.Row>
                <DataTable.Cell>{item.homeTeam}</DataTable.Cell>
                <DataTable.Cell numeric>{item.homeScore}</DataTable.Cell>
                <DataTable.Cell numeric>{item.awayScore}</DataTable.Cell>
                <DataTable.Cell>{item.awayTeam}</DataTable.Cell>
                <DataTable.Cell>{item.advanced}</DataTable.Cell>
              </DataTable.Row>
            )}
          />
        </DataTable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  navigationButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#228B22',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228B22',
  },
  stageContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  roundTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#228B22',
  },
});

export default CopadoBrasil;
