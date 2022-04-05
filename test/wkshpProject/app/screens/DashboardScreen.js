import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../config/AppColors'
import AppText from '../config/AppText'

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <AppText>DashboardScreen</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.mustard,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})