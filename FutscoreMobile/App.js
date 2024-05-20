import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Homepage from './src/Pages/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estatisticas from './src/Pages/Estatisticas';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FutScore'>
          <Stack.Screen name="FutScore" component={Homepage} />
          <Stack.Screen name="Estatisticas" component={Estatisticas} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>


  );
}

export default App;


