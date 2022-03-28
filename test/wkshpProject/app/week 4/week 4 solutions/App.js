import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';

import AppButton from './app/components/AppButton';
import AppScreen from './app/components/AppScreen';
import AppText from './app/components/AppText';



export default function App() {
  return (
    <AppScreen>
      <AppText style={styles.textStyle}> Hello World </AppText>
      <AppButton title="Click here"/>
      <StatusBar style="auto" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  textStyle:{
    color:'red',
    fontSize:50,
  }
});
