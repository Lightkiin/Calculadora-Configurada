import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabs from './src/navigation/TopTabs';
import ThemeProvider from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TopTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}