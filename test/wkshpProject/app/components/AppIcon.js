import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppColors from '../config/AppColors'

export default function AppIcon({icon, size = 30, color = AppColors.black}) {
  return (
    <View>
      <MaterialCommunityIcons 
        name={icon} 
        size={size} 
        color={color}
      />
    </View>
  )
}

const styles = StyleSheet.create({})