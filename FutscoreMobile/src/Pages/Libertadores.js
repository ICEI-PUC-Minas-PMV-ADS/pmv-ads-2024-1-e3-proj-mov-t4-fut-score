import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const placeholderLogoUrl = 'https://via.placeholder.com/40';

const Libertadores = ({ navigation }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const handleNextDate = () => {
    if (selectedDateIndex < libertadoresStages.length - 1) {
      setSelectedDateIndex(selectedDateIndex + 1);
    }
  };

  const handlePreviousDate = () => {
    if (selectedDateIndex > 0) {
      setSelectedDateIndex(selectedDateIndex - 1);
    }
  };

  const libertadoresStages = [
    {
      date: 'OITAVAS-DE-FINAL IDA',
      matches: [
        {
          date: '13/08',
          time: '19:00',
          homeTeam: {
            name: 'Grêmio',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']


          },
          awayTeam: {
            name: 'Fluminense',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '13/08',
          time: '21:30',
          homeTeam: {
            name: 'Colo-Colo',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/cEY0fDx48kkZOPpbK_Bhsg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'Junior',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/yAhh9CCI7x9DAyQkRJrouA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']


          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '13/08',
          time: '21:30',
          homeTeam: {
            name: 'San Lorenzo',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/3guH9PUqsLcUw9o8VBhAlw_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'Atlético-MG',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: '19:00',
          homeTeam: {
            name: 'Peñarol',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/dO-HNzx-ozLofoWOj7kr9g_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'The Strongest',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/n7PctzbrK3SsQvI81bU9DA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: '21:30',
          homeTeam: {
            name: 'Talleres',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/MW12yOtJtAqfvt7JKt4iUg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'River Plate',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/700Mj6lUNkbBdvOVEbjC3g_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '14/08',
          time: '21:30',
          homeTeam: {
            name: 'Botafogo',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'Palmeiras',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '15/08',
          time: '19:00',
          homeTeam: {
            name: 'Nacional',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Uql1qECWH5pRMbm5UVsjPg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'São Paulo',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '15/08',
          time: '21:30',
          homeTeam: {
            name: 'Flamengo',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'Bolivar',
            logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9205ld_2yc8dZSaWBtIsWg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'OITAVAS-DE-FINAL VOLTA',
      matches: [
        {
          date: '20/08',
          time: '19:00',
          homeTeam: {
            name: 'Fluminense', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/fCMxMMDF2AZPU7LzYKSlig_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']

          },
          awayTeam: {
            name: 'Grêmio', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '20/08',
          time: '21:30',
          homeTeam: {
            name: 'Junior', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/yAhh9CCI7x9DAyQkRJrouA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'Colo-Colo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/cEY0fDx48kkZOPpbK_Bhsg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '20/08',
          time: '21:30',
          homeTeam: {
            name: 'Atlético-MG', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/q9fhEsgpuyRq58OgmSndcQ_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'San Lorenzo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/3guH9PUqsLcUw9o8VBhAlw_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: '19:00',
          homeTeam: {
            name: 'The Strongest', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/n7PctzbrK3SsQvI81bU9DA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'Peñarol', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/dO-HNzx-ozLofoWOj7kr9g_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: '21:30',
          homeTeam: {
            name: 'River Plate', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/700Mj6lUNkbBdvOVEbjC3g_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'Talleres', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/MW12yOtJtAqfvt7JKt4iUg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '21/08',
          time: '21:30',
          homeTeam: {
            name: 'Palmeiras', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'Botafogo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/KLDWYp-H8CAOT9H_JgizRg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '22/08',
          time: '19:00',
          homeTeam: {
            name: 'São Paulo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'Nacional', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/Uql1qECWH5pRMbm5UVsjPg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: '22/08',
          time: '21:30',
          homeTeam: {
            name: 'Bolivar', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/9205ld_2yc8dZSaWBtIsWg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'Flamengo', logoUrl: 'https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png',
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'A DEFINIR',
      round: 'QUARTAS-DE-FINAL',
      matches: [
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'A DEFINIR',
      round: 'SEMI-FINAL',
      matches: [
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
    {
      date: 'A DEFINIR',
      round: 'FINAL',
      matches: [
        {
          date: 'A DEFINIR',
          time: 'A DEFINIR',
          homeTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          awayTeam: {
            name: 'A definir', logoUrl: placeholderLogoUrl,
            classification: '15º Lugar',
            statistics: { chutes: 12, chutesAGol: 6, posseDeBola: "38%", passes: 343, precisaoDePasse: "75%", faltas: 15, cartoesAmarelos: 2, cartoesVermelhos: 0, impedimentos: 0, escanteios: 2 },
            players: ['1. Lucas Arcanjo', '27. R. Cáceres', '15. C. da Conceição', '4. Wagner', '16. Lucas Esteves', '8. Luan', '30. Matheusinho', '29. Willian', '5. L. Naldi', '11. Osvaldo', '9. Alerrandro', '[T] Thiago Carpini']
          },
          homeScore: null,
          awayScore: null,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dateNavigation}>
        <TouchableOpacity onPress={handlePreviousDate} disabled={selectedDateIndex === 0}>
          <Text style={[styles.navigationText, selectedDateIndex === 0 && styles.disabledText]}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{libertadoresStages[selectedDateIndex].date}</Text>
        <TouchableOpacity onPress={handleNextDate} disabled={selectedDateIndex === libertadoresStages.length - 1}>
          <Text style={[styles.navigationText, selectedDateIndex === libertadoresStages.length - 1 && styles.disabledText]}>Próxima</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stageContainer}>
        {libertadoresStages[selectedDateIndex].matches.map((match, index) => (
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
  navigationButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  disabledText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
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
  roundTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
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

export default Libertadores;