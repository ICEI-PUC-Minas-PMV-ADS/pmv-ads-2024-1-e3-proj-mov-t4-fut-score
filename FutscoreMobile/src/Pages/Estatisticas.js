import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Estatisticas = ({ route }) => {
  const { homeTeam, awayTeam, homeScore, awayScore } = route.params;

  return (
    <View style={styles.container}>
      <Text>{homeTeam.name} vs {awayTeam.name}</Text>
      <Text>Score: {homeScore} - {awayScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Estatisticas;
