import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Button, Alert, Linking } from 'react-native';

const handleClick = () => Linking.openURL('http://netflix.com.au');

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Button color="#ee3523" 
          title="ENTER SITE" 
          onPress={()=>Alert.alert("G'day", "Do you love Netflix?", 
          [{text:"Yes", onPress: ()=> alert('YAY')}, 
          {text:"No", onPress: ()=> alert('NAY')}])} 
          style={styles.logo} />
      </TouchableOpacity>
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
    width: 200,
    height: 100,
    marginBottom: 100,
  },
});
