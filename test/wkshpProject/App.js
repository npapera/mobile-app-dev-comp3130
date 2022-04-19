import { StyleSheet } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import DashboardScreen from './app/screens/DashboardScreen';
import MyPaymentsScreen from './app/screens/MyPaymentsScreen';
import AddPaymentScreen from './app/screens/AddPaymentScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import TabNavigator from './app/navigation/TabNavigator';
import ConfigureAccount from './app/screens/ConfigureAccount';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    //<AddPaymentScreen/>
  );
}

const styles = StyleSheet.create({

})