import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';

import ConfigureAccount from '../screens/ConfigureAccount';
import SettingsScreen from '../screens/SettingsScreen';

const AppStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <AppStack.Navigator
		initialRouteName='Main'
		screenOptions={{ headerShown: false }}
	  >
      <AppStack.Screen name="Main" component={SettingsScreen}/>
      <AppStack.Screen name="ConfigureAccount" component={ConfigureAccount}/>
    </AppStack.Navigator>
  )
}

export default SettingsNavigator;