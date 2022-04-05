import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../config/AppColors'
import AppText from '../config/AppText'

export default function ConfigureRecord() {
  return (
    <View style={styles.container}>
      <AppText>ConfigureRecord</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.pacificBlue,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})