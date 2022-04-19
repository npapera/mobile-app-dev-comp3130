import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppColors from '../config/AppColors'

function AppHeader({children}) {
  return (
    <>
    <View style={styles.topSeperator}/>
      <View style={styles.header}>{children}</View>
    <View style={styles.botSeperator}/>
    </>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '85%',
    justifyContent: 'center',
  },
  topSeperator: {
    marginTop: '15%',
    width: '85%',
    height: 1,
    backgroundColor: AppColors.black,
  },
  botSeperator: {
    width: '85%',
    height: 1,
    backgroundColor: AppColors.black,
    marginBottom: 20,
  },
})