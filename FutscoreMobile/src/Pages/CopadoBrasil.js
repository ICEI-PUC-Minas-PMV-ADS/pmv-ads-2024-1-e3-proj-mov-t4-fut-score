import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const placeholderLogoUrl = 'https://via.placeholder.com/40';

const CopadoBrasil = ({ navigation }) => {
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

  const copaDoBrasilStages = [
    {
      date: '3º Fase',
      matches: [
        {
          date: '30/04',
          time: '20:00',
          homeTeam: { name: 'Operário-PR', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/GmLvorr4MqC4aRinQQ4Mdw_48x48.png' },
          awayTeam: { name: 'Grêmio', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png' },
          homeScore: 0,
          awayScore: 0,
        },
        {
          date: '13/07',
          time: '19:00',
          homeTeam: { name: 'Grêmio', logoUrl:'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png' },
          awayTeam: { name: 'Operário-PR', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/GmLvorr4MqC4aRinQQ4Mdw_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '30/04',
          time: '19:00',
          homeTeam: { name: 'Bahia', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_48x48.png' },
          awayTeam: { name: 'Criciúma', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u_L7Mkp33uNmFTv3uUlXeQ_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '23/05',
          time: '19:00',
          homeTeam: { name: 'Criciúma', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u_L7Mkp33uNmFTv3uUlXeQ_48x48.png' },
          awayTeam: { name: 'Bahia', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_48x48.png' },
          homeScore: 0,
          awayScore: 2,
        },
        {
          date: '01/05',
          time: '16:00',
          homeTeam: { name: 'Sampaio Corrêa', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/G52t9iE9YvNjIKh-8xyHGg_48x48.png' },
          awayTeam: { name: 'Fluminense', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png' },
          homeScore: 0,
          awayScore: 2,
        },
        {
          date: '22/05',
          time: '19:00',
          homeTeam: { name: 'Fluminense', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png' },
          awayTeam: { name: 'Sampaio Corrêa', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/G52t9iE9YvNjIKh-8xyHGg_48x48.png' },
          homeScore: 2,
          awayScore: 0,
        },
        {
          date: '01/05',
          time: '18:00',
          homeTeam: { name: 'Sousa', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/it_YmdpyMaOP8FP2Zqd3Jg_48x48.png' },
          awayTeam: { name: 'Bragantino', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_48x48.png' },
          homeScore: 1,
          awayScore: 1,
        },
        {
          date: '21/05',
          time: '19:30',
          homeTeam: { name: 'Bragantino', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/lMyw2zn1Z4cdkaxKJWnsQw_48x48.png' },
          awayTeam: { name: 'Sousa', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/it_YmdpyMaOP8FP2Zqd3Jg_48x48.png' },
          homeScore: 3,
          awayScore: 0,
        },
        {
          date: '02/05',
          time: '21:30',
          homeTeam: { name: 'Goiás', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_48x48.png' },
          awayTeam: { name: 'Cuiabá', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '23/05',
          time: '19:30',
          homeTeam: { name: 'Cuiabá', logoUrl:'https://ssl.gstatic.com/onebox/media/sports/logos/j6U8Rgt_6yyf0Egs9nREXw_48x48.png' },
          awayTeam: { name: 'Goiás', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/gb8bo2x00XsbvsVp9nGniA_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '02/05',
          time: '19:00',
          homeTeam: { name: 'Botafogo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png' },
          awayTeam: { name: 'Vitória', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '22/05',
          time: '19:00',
          homeTeam: { name: 'Vitória', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/LHSM6VchpkI4NIptoSTHOg_48x48.png' },
          awayTeam: { name: 'Botafogo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png' },
          homeScore: 1,
          awayScore: 2,
        },
        {
          date: '01/05',
          time: '19:00',
          homeTeam: { name: 'Fortaleza', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png' },
          awayTeam: { name: 'Vasco', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/hHwT8LwRmYCAGxQ-STLxYA_48x48.png' },
          homeScore: 0,
          awayScore: 0,
        },
        {
          date: '21/05',
          time: '21:30',
          homeTeam: { name: 'Vasco', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/hHwT8LwRmYCAGxQ-STLxYA_48x48.png' },
          awayTeam: { name: 'Fortaleza', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png' },
          homeScore: 3,
          awayScore: 3,
        },
        {
          date: '01/05',
          time: '21:30',
          homeTeam: { name: 'Flamengo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png' },
          awayTeam: { name: 'Amazonas', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/uuUY0RAXejVcckwdPoVyBQ_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '22/05',
          time: '21:30',
          homeTeam: { name: 'Amazonas', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/uuUY0RAXejVcckwdPoVyBQ_48x48.png' },
          awayTeam: { name: 'Flamengo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png' },
          homeScore: 0,
          awayScore: 1,
        },
        {
          date: '02/05',
          time: '19:30',
          homeTeam: { name: 'Águia de Marabá', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/2GeWMGrfg-1oZOBkC0DWhA_48x48.png' },
          awayTeam: { name: 'São Paulo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png' },
          homeScore: 1,
          awayScore: 3,
        },
        {
          date: '23/05',
          time: '21:30',
          homeTeam: { name: 'São Paulo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png' },
          awayTeam: { name: 'Águia de Marabá', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/2GeWMGrfg-1oZOBkC0DWhA_48x48.png' },
          homeScore: 2,
          awayScore: 0,
        },
        {
          date: '02/05',
          time: '21:30',
          homeTeam: { name: 'Palmeiras', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png' },
          awayTeam: { name: 'Botafogo-SP', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/VYXHOgQwI7tw3EyFlWngWg_48x48.png' },
          homeScore: 2,
          awayScore: 1,
        },
        {
          date: '23/05',
          time: '19:00',
          homeTeam: { name: 'Botafogo-SP', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/VYXHOgQwI7tw3EyFlWngWg_48x48.png' },
          awayTeam: { name: 'Palmeiras', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png' },
          homeScore: 0,
          awayScore: 0,
        },
        {
          date: '01/05',
          time: '18:00',
          homeTeam: { name: 'Ypiranga-RS', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/hNX_cbKDANEj_oTo1jlL7Q_48x48.png' },
          awayTeam: { name: 'Athletico-PR', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9LkdBR4L5plovKM8eIy7nQ_48x48.png' },
          homeScore: 2,
          awayScore: 1,
        },
        {
          date: '13/07',
          time: '18:00',
          homeTeam: { name: 'Athletico-PR', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9LkdBR4L5plovKM8eIy7nQ_48x48.png' },
          awayTeam: { name: 'Ypiranga-RS', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/hNX_cbKDANEj_oTo1jlL7Q_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '10/07',
          time: '19:00',
          homeTeam: { name: 'Internacional', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png' },
          awayTeam: { name: 'Juventude', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '13/07',
          time: '16:00',
          homeTeam: { name: 'Juventude', logoUrl:'https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_48x48.png'},
          awayTeam: { name: 'Internacional', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png' },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '02/05',
          time: '20:30',
          homeTeam: { name: 'CRB', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/zEM-aepnkjTSoBMW9LH_Qw_48x48.png' },
          awayTeam: { name: 'Ceará', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
        {
          date: '23/05',
          time: '21:30',
          homeTeam: { name: 'Ceará', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/mSl0cz3i2t8uv4zcprobOg_48x48.png' },
          awayTeam: { name: 'CRB', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/zEM-aepnkjTSoBMW9LH_Qw_48x48.png' },
          homeScore: 0,
          awayScore: 1,
        },
        {
          date: '01/05',
          time: '20:00',
          homeTeam: { name: 'América-RN', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/OdQJxRXXp2gxKWl7JkPsmw_48x48.png' },
          awayTeam: { name: 'Corinthians', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
          homeScore: 1,
          awayScore: 2,
        },
        {
          date: '22/05',
          time: '20:00',
          homeTeam: { name: 'Corinthians', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png' },
          awayTeam: { name: 'América-RN', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/OdQJxRXXp2gxKWl7JkPsmw_48x48.png' },
          homeScore: 2,
          awayScore: 1,
        },
        {
          date: '01/05',
          time: '16:00',
          homeTeam: { name: 'Brusque', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/ykKt1U6PEpMP7iiXwZvdBQ_48x48.png' },
          awayTeam: { name: 'Atlético-GO', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9mqMGndwoR9og_Z0uEl2kw_48x48.png' },
          homeScore: 1,
          awayScore: 2,
        },
        {
          date: '22/05',
          time: '19:00',
          homeTeam: { name: 'Atlético-GO', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9mqMGndwoR9og_Z0uEl2kw_48x48.png' },
          awayTeam: { name: 'Brusque', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/ykKt1U6PEpMP7iiXwZvdBQ_48x48.png' },
          homeScore: 2,
          awayScore: 1,
        },
        {
          date: '30/04',
          time: '21:30',
          homeTeam: { name: 'Atlético-MG', logoUrl:  'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png' },
          awayTeam: { name: 'Sport', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u9Ydy0qt6JJjWhTaI6r10A_48x48.png' },
          homeScore: 2,
          awayScore: 0,
        },
        {
          date: '22/05',
          time: '20:00',
          homeTeam: { name: 'Sport', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/u9Ydy0qt6JJjWhTaI6r10A_48x48.png' },
          awayTeam: { name: 'Atlético-MG', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png' },
          homeScore: 1,
          awayScore: 0,
        },
      ],
    },
    {
      date: ' OITAVAS SEMANA 31/07',
      round: 'OITAVAS-DE-FINAL',
      matches: Array(8).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'SEMANA 07/08',
      round: 'OITAVAS-DE-FINAL',
      matches: Array(8).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'A DEFINIR',
      round: 'QUARTAS-DE-FINAL',
      matches: Array(4).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'A DEFINIR',
      round: 'SEMI-FINAL',
      matches: Array(2).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
    {
      date: 'A DEFINIR',
      round: 'FINAL',
      matches: Array(1).fill({
        homeTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        awayTeam: { name: 'A definir', logoUrl: placeholderLogoUrl },
        homeScore: null,
        awayScore: null,
      }),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={handlePreviousDate} disabled={selectedDateIndex === 0}>
          <Text style={[styles.navigationText, selectedDateIndex === 0 && styles.disabledText]}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{copaDoBrasilStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate} disabled={selectedDateIndex === copaDoBrasilStages.length - 1}>
          <Text style={[styles.navigationText, selectedDateIndex === copaDoBrasilStages.length - 1 && styles.disabledText]}>Próxima</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stageContainer}>
        {copaDoBrasilStages[selectedDateIndex].matches.map((match, index) => (
          <View key={index} style={styles.matchContainer}>
            <GameCard
              date={match.date}
              time={match.time}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              homeScore={match.homeScore}
              awayScore={match.awayScore}
              navigation={navigation}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const GameCard = ({ date, time, homeTeam, awayTeam, homeScore, awayScore, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Estatisticas', { homeTeam, awayTeam, homeScore, awayScore })}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.dateTimeText}>{time} - {date}</Text>
        </View>
        <View style={styles.matchDetails}>
          <View style={styles.teamContainer}>
            <Image source={{ uri: homeTeam.logoUrl }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{homeTeam.name}</Text>
          </View>
          <Text style={styles.score}>
            {homeScore !== null && awayScore !== null ? `${homeScore} - ${awayScore}` : 'X'}
          </Text>
          <View style={styles.teamContainer}>
            <Image source={{ uri: awayTeam.logoUrl }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{awayTeam.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  navigationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  disabledText: {
    opacity: 0.5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  stageContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  matchContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  matchDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CopadoBrasil;
