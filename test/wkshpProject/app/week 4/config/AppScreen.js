import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

function AppScreen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
})

export default AppScreen;