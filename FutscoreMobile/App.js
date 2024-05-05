import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Homepage from './src/Pages/Homepage'; 

const App = () => {
  return (
    <SafeAreaProvider>
      <Homepage />
    </SafeAreaProvider>
  );
};

export default App;
