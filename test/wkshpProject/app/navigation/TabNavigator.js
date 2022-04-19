import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

const AppTab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();

import DashboardScreen from '../screens/DashboardScreen';
import MyPaymentsScreen from '../screens/MyPaymentsScreen';
import AddPaymentScreen from '../screens/AddPaymentScreen';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';

import SettingsNavigator from './SettingsNavigator';

const TabNavigator = () => {
  return (
    <AppTab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: AppColors.smalt,
        tabBarInactiveBackgroundColor: AppColors.pacificBlue,
      }}
    >
        <AppTab.Screen name="Dashboard" 
          component={DashboardScreen}
          options={{tabBarIcon: () => 
          <AppIcon icon="home-analytics" size={32} color={AppColors.white}
          />}}
        />
        <AppTab.Screen name="MyPayments" 
          component={MyPaymentsScreen}
          options={{tabBarIcon: () => 
          <AppIcon icon="account-cash" size={28} color={AppColors.white}
          />}}
        />
        <AppTab.Screen name="AddPayment" 
        component={AddPaymentScreen}
        options={{tabBarIcon: () => 
          <AppIcon icon="cash-plus" size={32} color={AppColors.white}
          />}}
        />
        <AppTab.Screen name="Settings" 
        component={SettingsNavigator}
        options={{tabBarIcon: () => 
          <AppIcon icon="cog" size={28} color={AppColors.white}
          />}}
        />
    </AppTab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})