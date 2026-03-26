import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { darkMode, setDarkMode, theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Configurações
      </Text>

      {/* Dark Mode */}
      <View style={styles.row}>
        <Text style={{ color: theme.colors.text }}>Modo Escuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Outras opções */}
      <View style={styles.row}>
        <Text style={{ color: theme.colors.text }}>Som ao clicar</Text>
        <Switch />
      </View>

      <View style={styles.row}>
        <Text style={{ color: theme.colors.text }}>Histórico</Text>
        <Switch />
      </View>

      <View style={styles.row}>
        <Text style={{ color: theme.colors.text }}>Vibração</Text>
        <Switch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});