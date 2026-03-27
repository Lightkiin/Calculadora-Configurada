import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CalculatorScreen from '../screens/CalculatorScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { MaterialIcons } from '@expo/vector-icons'; 

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { flexDirection: 'row', backgroundColor: '#000' },
        tabBarIndicatorStyle: { height: 0 },
      }}
      tabBar={({ state, navigation }) => {
        const statusBarHeight = StatusBar.currentHeight || 0; // Altura da status bar

        return (
          <View style={{ flexDirection: 'row', height: 60, marginTop: statusBarHeight }}>
            {state.routes.map((route, index) => {
              const focused = state.index === index;

              // Ícones corretos
              let iconName = '';
              if (route.name === 'Calculadora') iconName = 'calculate';
              else if (route.name === 'Configurações') iconName = 'settings';

              const backgroundColor = focused ? 'green' : 'black';

              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => navigation.navigate(route.name)}
                  style={[styles.tabItem, { backgroundColor, width: width / state.routes.length }]}
                >
                  <MaterialIcons name={iconName} size={28} color="white" />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen name="Calculadora" component={CalculatorScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});