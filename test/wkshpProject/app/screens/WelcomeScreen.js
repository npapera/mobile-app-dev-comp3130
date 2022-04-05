import React from 'react';
import { StyleSheet, View , Image } from 'react-native';

import AppColors from '../config/AppColors';
import AppScreen from '../config/AppScreen';
import AppText from '../config/AppText';
import AppButton from '../config/AppButton';

function WelcomeScreen({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image style={styles.logo} source={require('../../assets/cash_buddy_logo.png')}/>
        <AppText style={styles.textHeading}>Welcome to CashBuddy</AppText>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate("Login")} style={styles.lightButton}></AppButton>
        <AppButton title='Register' onPress={() => navigation.navigate("Register")} style={styles.darkButton}></AppButton>
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
    width: 150,
    height: 150,
  },
});

export default WelcomeScreen;