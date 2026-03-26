import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = React.useState('');

  const handlePress = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => setDisplay('');
  const backspace = () => setDisplay((prev) => prev.slice(0, -1));

  const handleDecimal = () => {
    const parts = display.split(/[\+\-\*\/]/);
    const last = parts[parts.length - 1];
    if (!last.includes('.')) handlePress('.');
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay('Erro');
    }
  };

  const renderButton = (label, onPress, color = '#333') => (
    <Button
      mode="contained"
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
      labelStyle={styles.buttonText}
    >
      {label}
    </Button>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.display}>{display || '0'}</Text>

        <View style={styles.row}>
          {renderButton('C', clearDisplay, '#b00020')}
          {renderButton('⌫', backspace, '#616161')}
          {renderButton('/', () => handlePress('/'))}
          {renderButton('*', () => handlePress('*'))}
        </View>

        <View style={styles.row}>
          {renderButton('7', () => handlePress('7'))}
          {renderButton('8', () => handlePress('8'))}
          {renderButton('9', () => handlePress('9'))}
          {renderButton('-', () => handlePress('-'))}
        </View>

        <View style={styles.row}>
          {renderButton('4', () => handlePress('4'))}
          {renderButton('5', () => handlePress('5'))}
          {renderButton('6', () => handlePress('6'))}
          {renderButton('+', () => handlePress('+'), '#ff9800')}
        </View>

        <View style={styles.row}>
          {renderButton('1', () => handlePress('1'))}
          {renderButton('2', () => handlePress('2'))}
          {renderButton('3', () => handlePress('3'))}
          {renderButton('.', handleDecimal)}
        </View>

        <View style={styles.row}>
          {renderButton('0', () => handlePress('0'))}
          <View style={styles.button} />
          <View style={styles.button} />
          {renderButton('=', calculate, '#4caf50')}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-end',
    padding: 15,
  },
  display: {
    color: '#fff',
    fontSize: 64,
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    paddingVertical: 15,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
});