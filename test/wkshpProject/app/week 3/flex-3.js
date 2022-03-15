import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box1:{
    backgroundColor: '#221154',
    width: 100,
    height: 100,
  },
  box2:{
    backgroundColor: '#abdbe3',
    width: 100,
    height: 100,
  },
  box3:{
    backgroundColor: '#eab676',
    width: 100,
    height: 100,
  }
});
