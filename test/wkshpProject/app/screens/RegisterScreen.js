import React, { useState } from 'react';
import { StyleSheet, View , Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors';
import AppScreen from '../config/AppScreen';
import AppText from '../config/AppText';
import AppButton from '../config/AppButton';
import AppTextInput from '../config/AppTextInput';

const schema = Yup.object().shape(
  {
    username: Yup.string().required().label("Username"),
    fullname: Yup.string().required().label("Full Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup. string().required().min(4).max(8).label("Password"),
  }
);

function RegisterScreen({navigation}) {

  const[fullName, setFullName] = useState("");
  const[userEmail, setUserEmail] = useState("");

  return (
    <AppScreen style={styles.container}>
      <View style={styles.registerContainer}>
        <Image style={styles.logo} source={require('../../assets/cash_buddy_logo.png')}/>
        <AppText style={styles.textHeading}>Register</AppText>
      </View>
      
      <Formik
        initialValues={{username: '', fullname: '', email: '', password: ''}}
        onSubmit={values => 
          {console.log(values);
          navigation.navigate("Home", {
            screen: "Dashboard",
            params:{
              paramName: values.fullname,
              paramEmail: values.email,
              paramImage: require('../../assets/newUser.jpg')
            }
          });}}
        validationSchema={schema}
        >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
          <View style={styles.textInputContainer}>
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="account"
              placeholder="Username"
              onBlur={() => setFieldTouched("username")}
              onChangeText={handleChange("username")}
            />
            {touched.username && <AppText style={styles.errorAppText}>{errors.username}</AppText>}
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="rename-box"
              placeholder="Full Name"
              onBlur={() => setFieldTouched("fullname")}
              onChangeText={handleChange("fullname")}
            />
            {touched.fullname && <AppText style={styles.errorAppText}>{errors.fullname}</AppText>}
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            {touched.email && <AppText style={styles.errorAppText}>{errors.email}</AppText>}
            <AppTextInput
              autoCaptilize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password" 
              secureTextEntry={true}
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />
            {touched.password && <AppText style={styles.errorAppText}>{errors.password}</AppText>}
          </View>
          <View style={styles.buttonContainer}>
            <AppButton title='Login' onPress={handleSubmit} style={styles.lightButton}/>
          </View>
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.mustard,
    alignItems: 'center',
  },
  registerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
  textHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: AppColors.black,
  },
  lightButton: {
    backgroundColor: AppColors.summerSky,
  },
  logo:{
    marginTop: 50,
    width: 150,
    height: 150,
  },
  errorAppText:{
    color: 'red',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default RegisterScreen;