import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import AppText from '../config/AppText'

const AppListItem = ({image, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>Welcome {title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

export default AppListItem

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  image:{
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 4,
    marginRight: 10,
  },
  textContainer:{
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title:{
    fontSize: 20,
  },
  subtitle:{
    fontSize: 14,
  }
})