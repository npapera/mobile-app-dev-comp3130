import { StyleSheet, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from '../config/AppText'
import AppColors from '../config/AppColors'

function AppIconHeader({icon, title}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name={icon} 
        size={48} 
        color={AppColors.black}
        style={styles.iconStyle}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  )
}

export default AppIconHeader

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  iconStyle:{
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer:{
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
  }
})