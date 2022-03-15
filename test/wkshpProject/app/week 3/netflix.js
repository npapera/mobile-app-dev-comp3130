import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking } from 'react-native';

const handleClick = () => Linking.openURL('http://netflix.com.au');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.para1} onPress={handleClick}>Netflix</Text>
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
  para1:{
    color:'#ff0000',
    fontStyle:'italic',
    fontSize: 40,
    textTransform: 'uppercase',
  },
});
