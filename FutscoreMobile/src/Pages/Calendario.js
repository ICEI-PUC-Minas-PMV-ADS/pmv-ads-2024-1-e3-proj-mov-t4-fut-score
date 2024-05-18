import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarioJogos = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const jogos = {
    '2024-05-18':[{time: 'Cruzeiro x Atletico', local:'Mineirão'}],
    '2024-05-20': [{ time: 'Flamengo x Corinthians', local: 'Maracanã' }],
    '2024-05-25': [{ time: 'Palmeiras x São Paulo', local: 'Allianz Parque' }],

  };

  return (
    <View>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{ [selectedDate]: { selected: true, selectedColor: 'blue' } }}
      />
      {selectedDate !== '' && jogos[selectedDate] && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jogos em {selectedDate}:</Text>
          {jogos[selectedDate].map((jogo, index) => (
            <View key={index} style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 16 }}>{jogo.time}</Text>
              <Text>{jogo.local}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default CalendarioJogos;