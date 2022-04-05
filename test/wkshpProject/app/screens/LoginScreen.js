import { StyleSheet, View , Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors';
import AppScreen from '../config/AppScreen';
import AppText from '../config/AppText';
import AppButton from '../config/AppButton';
import AppTextInput from '../config/AppTextInput';

const users = [
  {
    username: "jdoe7",
    fullname: "John Doe",
    email: "jdoe@gmail.com",
    password: "7777"
  },
  {
    username: "tstark9",
    fullname: "Tony Stark",
    email: "tstark@gmail.com",
    password: "!@#$"
  },
  {
    username: "pp3",
    fullname: "Peter Parker",
    email: "pp3@gmail.com",
    password: "i<3theavengers"
  }
];

const schema = Yup.object().shape(
  {
    username: Yup.string().required().label("Username"),
    password: Yup. string().required().min(4).label("Password"),
  }
);

const validateUser = ({username, password}) => {
  return(
    users.filter((user) => user.username === username && user.password === password).length>0 
  );
}

function LoginScreen({navigation}) {

  return (
    <AppScreen style={styles.container}>
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require('../../assets/cash_buddy_logo.png')}/>
        <AppText style={styles.textHeading}>Login</AppText>
      </View>
      
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={(values, {resetForm}) => {
          if(validateUser(values)){
            console.log(values);
            navigation.navigate("Dashboard");
          } else {
            resetForm();
            alert("Invalid login details")
          }
        }}
        validationSchema={schema}
        >
        {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
          <View style={styles.textInputContainer}>
            <AppTextInput
              name="usernameField"
              autoCaptilize="none"
              autoCorrect={false}
              icon="account"
              placeholder="Username"
              value={values.username}
              onBlur={() => setFieldTouched("username")}
              onChangeText={handleChange("username")}
            />
            
            {touched.username && <AppText style={styles.errorAppText}>{errors.username}</AppText>}
            <AppTextInput
              name="passwordField"
              autoCaptilize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              value={values.password}
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
  loginContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  textInputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
    width: 250,
    marginTop: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 80,
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

export default LoginScreen;