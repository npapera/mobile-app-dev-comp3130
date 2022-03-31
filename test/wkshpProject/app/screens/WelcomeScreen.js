import React from 'react';
import { StyleSheet, View , Image } from 'react-native';

import AppColors from './app/config/AppColors';
import AppScreen from './app/config/AppScreen';
import AppText from './app/config/AppText';
import AppButton from './app/config/AppButton';

export default function App() {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image style={styles.logo} source={require('./assets/cash_buddy_logo.png')}/>
        <AppText style={styles.textHeading}>Welcome to CashBuddy</AppText>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title='Login' style={styles.lightButton}></AppButton>
        <AppButton title='Register' style={styles.darkButton}></AppButton>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.mustard,
  },
  welcomeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: AppColors.black,
  },
  lightButton: {
    backgroundColor: AppColors.summerSky,
  },
  darkButton: {
    backgroundColor: AppColors.pacificBlue,
  },
  logo:{
    marginTop: 50,
    width: 200,
    height: 200,
  },
});