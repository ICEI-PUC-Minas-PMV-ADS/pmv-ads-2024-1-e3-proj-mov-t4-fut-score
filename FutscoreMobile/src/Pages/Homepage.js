import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet } from 'react-native';

import GameCard from '../components/GameCard';
import Header from '../components/Header';
import Campeonatos from '../components/Campeonatos';

const games = [
  {
    homeTeam: {
      name: 'VIT',
      logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_48x48.png',
      players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
    },
    awayTeam: {
      name: 'CAM',
      logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png',
      players: ['22. Everson', '26. R. Saravia', '3. B. Fuchs', '21. R. Battaglia', '47. Rômulo', '45. Alisson', '6. Scarpa', '17. Igor Gomes', '15. F. Zaracho', '38. Pedrinho','42. Cadu', '[T] Gabriel Milito']
    },
    homeScore: 4,
    awayScore: 2,
  },
  {
    homeTeam: {
      name: 'CRU',
      logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Tcv9X__nIh-6wFNJPMwIXQ_48x48.png',
      players: ['98. Anderson', '12. Willian', '5. Zé Ivaldo', '43. João Marcelo', '3. Marlon', '77. Japa', '22. Vitinho', '17. Ramiro', '11. Arthur Gomes','10. Matheus Pereira', '25. Vilalba', '[T] Fernando Seabra']
    },
    awayTeam: {
      name: 'FLU',
      logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png',
      players: ['1. Fábio', '31. Calegari', '25. Antônio Carlos', '22. Gabriel Pires', '6. Diogo Barbosa', '8. Martinelli', '45. Lima', '80. Terans', '9. John Kennedy', '19. Kauã Elias', '11. Keno','[T] Fernando Diniz']
    },
    homeScore: 2,
    awayScore: 0,
  },
  {
    homeTeam: {
      name: 'FLA',
      logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png',
      players: ['1. Rossi', '43. Wesley', '23 David Luiz', '4 Léo Pereira', '6 Ayrton Lucas', '3 L. Ortiz', '8 Gerson', '19 Lorran', '7 L. Araújo', '9. Pedro', '11. E. Cebolinha', '[T] Tite']
    },
    awayTeam: {
      name: 'BAH',
      logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_48x48.png',
      players: ['22. Marcos Felipe', '2. Gilberto', '3. Gabriel Xavier', '4. Kanu', '46. Luciano Juba', '19. Caio Alexandre', '6. Jean Lucas', '10. Everton Ribeiro', '8. Cauly', '16. Thaciano', '9. Everaldo', '[T] Rogério Ceni']
    },
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
