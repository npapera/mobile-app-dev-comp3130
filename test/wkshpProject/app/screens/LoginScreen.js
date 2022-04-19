import { StyleSheet, View , Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors';
import AppScreen from '../config/AppScreen';
import AppText from '../config/AppText';
import AppButton from '../config/AppButton';
import AppTextInput from '../config/AppTextInput';
import DataManager from '../config/DataManager';

const users = [
  {
    id: "user1", 
    username: "jdoe7",
    fullname: "John Doe",
    email: "jdoe@gmail.com",
    password: "7777",
    image: require('../../assets/john.jpg')
  },
  {
    id: "user2", 
    username: "tstark9",
    fullname: "Tony Stark",
    email: "tstark@gmail.com",
    password: "9999",
    image: require('../../assets/t_stark.png')
  },
  {
    id: "user3", 
    username: "pp3",
    fullname: "Peter Parker",
    email: "pp3@gmail.com",
    password: "3333",
    image: require('../../assets/holland.jpg')
  }
];

const schema = Yup.object().shape(
  {
    username: Yup.string().required().label("Username"),
    password: Yup. string().required().min(4).label("Password"),
  }
);

const getUser = ({username}) => {
  return users.find((user) => user.username === username)
}

const validateUser = ({username, password}) => {
  return(
    users.filter((user) => user.username === username && user.password === password).length>0 
  );
}

const createUser = ({username}) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({username}).id;
  commonData.setUserID(userID);
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
            createUser(values);
            navigation.navigate("Home", {
              screen: "Dashboard",
              params:{
                paramName: getUser(values).fullname,
                paramEmail: getUser(values).email,
                paramImage: getUser(values).image
              },
            });
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