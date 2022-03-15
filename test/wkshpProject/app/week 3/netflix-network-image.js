import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, TouchableOpacity, TouchableWithoutFeedback, Linking } from 'react-native';

const handleClick = () => Linking.openURL('http://netflix.com.au');

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Image style={styles.logo} source={{uri: "https://logodix.com/logo/786654.jpg"}}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

/*<TouchableWithoutFeedback onPress={()=>console.log('Image Clicked')}>
        <Image style={styles.logo} source={{uri: "https://logodix.com/logo/786654.jpg"}}/>
  </TouchableWithoutFeedback>*/

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
  },
});
