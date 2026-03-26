import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CalculatorScreen from '../screens/CalculatorScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowIcon: true,
      }}
    >
      <Tab.Screen
        name="Calculadora"
        component={CalculatorScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calculate" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}