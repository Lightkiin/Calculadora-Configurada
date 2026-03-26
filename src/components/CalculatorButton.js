import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function CalculatorButton({ label, onPress, color = '#333' }) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
      labelStyle={styles.buttonText}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
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