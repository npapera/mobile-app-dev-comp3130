import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Linking } from 'react-native';

const handleClick = () => Linking.openURL('http://netflix.com.au');

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/netflix_logo.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop: 50,
    width: 100,
    height: 100,
  },
});
