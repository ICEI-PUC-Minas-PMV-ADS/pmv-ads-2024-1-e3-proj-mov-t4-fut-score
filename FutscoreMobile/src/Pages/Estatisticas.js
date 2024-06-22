import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../components/Button';

const Estatisticas = ({ route }) => {
  const { homeTeam, awayTeam, homeScore, awayScore } = route.params;

  // Estados para controlar a visibilidade dos modais
  const [isEscalacaoVisible, setEscalacaoVisible] = useState(false);
  const [isClassificacaoVisible, setClassificacaoVisible] = useState(false);
  const [isEstatisticasVisible, setEstatisticasVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.teamContainer}>
          <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{homeTeam.name}</Text>
        </View>
        <Text style={styles.score}>
          {homeScore} - {awayScore}
        </Text>
        <View style={styles.teamContainer}>
          <Image source={{ uri: awayTeam.logoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{awayTeam.name}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setEscalacaoVisible(true)}>
          <Botao text="Escalação" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setClassificacaoVisible(true)}>
          <Botao text="Classificação" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setEstatisticasVisible(true)}>
          <Botao text="Estatísticas" />
        </TouchableOpacity>
      </View>

      {/* Modal para Escalação */}
      <Modal
        visible={isEscalacaoVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEscalacaoVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Escalação</Text>
            <ScrollView>
              <View style={styles.teamLineup}>
                <Text style={styles.teamLineupTitle}>{homeTeam.name}</Text>
                {(homeTeam.players || []).map((player, index) => (
                  <Text key={index} style={styles.playerName}>{player}</Text>
                ))}
              </View>
              <View style={styles.teamLineup}>
                <Text style={styles.teamLineupTitle}>{awayTeam.name}</Text>
                {(awayTeam.players || []).map((player, index) => (
                  <Text key={index} style={styles.playerName}>{player}</Text>
                ))}
              </View>
            </ScrollView>
            <TouchableOpacity onPress={() => setEscalacaoVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para Classificação */}
      <Modal
  visible={isClassificacaoVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setClassificacaoVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Classificação</Text>
      <Text style={styles.classificationText}>{homeTeam.name} - {homeTeam.classification}</Text>
      <Text style={styles.classificationText}>{awayTeam.name} - {awayTeam.classification}</Text>
      <TouchableOpacity onPress={() => setClassificacaoVisible(false)}>
        <Text style={styles.closeButtonText}>FECHAR</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      {/* Modal para Estatísticas */}
      <Modal
        visible={isEstatisticasVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEstatisticasVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Estatísticas</Text>
            <TouchableOpacity onPress={() => setEstatisticasVisible(false)}>
              <Text>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.infoContainer}>
        <Text>INFORMAÇÕES</Text>
        <Text>Informações será mostrada aqui</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    marginLeft: 60,
  },
  button: {
    width: '90%',
    marginVertical: 1,
  },
  infoContainer: {
    marginTop: 20,
    width: '90%',
    height: '40%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamLineup: {
    marginBottom: 20,
  },
  teamLineupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  playerName: {
    fontSize: 14,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 4,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classificationText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Estatisticas;
