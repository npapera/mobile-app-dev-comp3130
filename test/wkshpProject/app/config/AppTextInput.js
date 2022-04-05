import { StyleSheet, Platform, TextInput, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from './AppColors'

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons 
            name={icon} 
            size={25} 
            color={AppColors.white}
            style={styles.icon}
        />
        <TextInput 
            style={styles.textInput}
            {...otherProps}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.pacificBlue,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 250,
        borderRadius: 20,
    },
    textInput: {
        marginLeft: 5,
        color: AppColors.white,
        fontSize: 18,
        fontFamily: Platform.OS == 'android' ? 'Roboto' : 'Cochin',
    },
    icon: {
        marginLeft: 15,
    }
})