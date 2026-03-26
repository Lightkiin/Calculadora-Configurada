import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import CalculatorScreen from './src/screens/CalculatorScreen';

export default function App() {
  return (
    <PaperProvider>
      <CalculatorScreen />
    </PaperProvider>
  );
}