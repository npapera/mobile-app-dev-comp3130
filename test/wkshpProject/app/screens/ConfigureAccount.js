import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors'
import AppText from '../config/AppText'
import AppScreen from '../config/AppScreen'
import AppHeader from '../components/AppHeader'
import AppButton from '../config/AppButton';
import AppTextInput from '../config/AppTextInput';
import DataManager from '../config/DataManager';

export default function ConfigureAccount() {

  const getUserData = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getUserInfo(user);
  }

  const userData = getUserData();

  return (
    <AppScreen style={styles.container}>
      <AppHeader>
        <AppText style={styles.header}>Configure Account</AppText>
      </AppHeader>

      <Formik
        initialValues={{username: '', fullname: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
        >
        {({handleChange, handleSubmit, setFieldTouched}) => (
          <>
          <View style={styles.textInputContainer}>
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="account"
              placeholder={userData[0].username}
              onBlur={() => setFieldTouched("username")}
              onChangeText={handleChange("username")}
            />
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="rename-box"
              placeholder={userData[0].fullname}
              onBlur={() => setFieldTouched("fullname")}
              onChangeText={handleChange("fullname")}
            />
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="email"
              placeholder={userData[0].email}
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="****" 
              secureTextEntry={true}
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <AppButton title='Save' onPress={handleSubmit} style={styles.lightButton}/>
          </View>
          </>
        )}
      </Formik>
    </AppScreen>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.summerSky,
      flex: 1,
      alignItems: 'center',
    },
    header: {
      fontSize: 24,
    },
    textInputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 250,
      width: 250,
      marginTop: 20,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      marginTop: 60,
    },
    lightButton: {
      backgroundColor: AppColors.pacificBlue,
    },
})