import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppColors from './app/config/AppColors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: AppColors.black}}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mustard,
    alignItems: 'center',
    justifyContent: 'center',
  },
});