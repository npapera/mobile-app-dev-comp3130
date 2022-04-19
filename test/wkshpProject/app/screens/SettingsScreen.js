import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppColors from '../config/AppColors'
import AppScreen from '../config/AppScreen'
import AppHeader from '../components/AppHeader'
import AppIconHeader from '../components/AppIconHeader'
import AppTextOption from '../components/AppTextOption'

export default function SettingsScreen({navigation}) {
  return (
    
    <AppScreen style={styles.container}>
      <AppHeader>
        <AppIconHeader icon="cog" title="Settings"/>
      </AppHeader>
      <View style={styles.optionContainer}>
        <AppTextOption title="Configure Accounts" onPress={() => navigation.navigate("ConfigureAccount")}/>
      </View>
      <View style={styles.seperator}/>
      <View style={styles.optionContainer}>
        <AppTextOption title="Logout" />
      </View>
      <View style={styles.seperator}/>    
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.summerSky,
    flex: 1,
    alignItems: 'center',
  },
  optionContainer: {
    height: 80,
    width: '85%',
    justifyContent: 'center',
  },
  seperator: {
    width: '85%',
    height: 1,
    backgroundColor: AppColors.black,
  },
})