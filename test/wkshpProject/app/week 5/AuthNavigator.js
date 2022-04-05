import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ConfigureRecord from '../screens/ConfigureRecord';
import DashboardScreen from '../screens/DashboardScreen';

const AppStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AppStack.Navigator
		initialRouteName="Welcome"
		screenOptions={{ headerShown: false }}
	    >
        <AppStack.Screen name="Welcome" component={WelcomeScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen}/>
        <AppStack.Screen name="Register" component={RegisterScreen}/>
        <AppStack.Screen name="Configure Record" component={ConfigureRecord}/>
        <AppStack.Screen name="Dashboard" component={DashboardScreen}/>
    </AppStack.Navigator>
  )
}

export default AuthNavigator;