import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { handleDecimal, calculateResult } from '../utils/calculatorLogic';
import { ThemeContext } from '../context/ThemeContext';

export default function CalculatorScreen() {
  const [display, setDisplay] = React.useState('');
  const { theme } = useContext(ThemeContext);

  const handlePress = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => setDisplay('');
  const backspace = () => setDisplay((prev) => prev.slice(0, -1));

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.display, { color: theme.colors.text }]}>
        {display || '0'}
      </Text>

      <View style={styles.row}>
        <CalculatorButton label="C" onPress={clearDisplay} color="#b00020" />
        <CalculatorButton label="⌫" onPress={backspace} color="#616161" />
        <CalculatorButton label="/" onPress={() => handlePress('/')} />
        <CalculatorButton label="*" onPress={() => handlePress('*')} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="7" onPress={() => handlePress('7')} />
        <CalculatorButton label="8" onPress={() => handlePress('8')} />
        <CalculatorButton label="9" onPress={() => handlePress('9')} />
        <CalculatorButton label="-" onPress={() => handlePress('-')} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="4" onPress={() => handlePress('4')} />
        <CalculatorButton label="5" onPress={() => handlePress('5')} />
        <CalculatorButton label="6" onPress={() => handlePress('6')} />
        <CalculatorButton label="+" onPress={() => handlePress('+')} color="#ff9800" />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="1" onPress={() => handlePress('1')} />
        <CalculatorButton label="2" onPress={() => handlePress('2')} />
        <CalculatorButton label="3" onPress={() => handlePress('3')} />
        <CalculatorButton
          label="."
          onPress={() => handleDecimal(display, handlePress)}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="0" onPress={() => handlePress('0')} />
        <View style={styles.button} />
        <View style={styles.button} />
        <CalculatorButton
          label="="
          onPress={() => calculateResult(display, setDisplay)}
          color="#4caf50"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  display: {
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
  },
});