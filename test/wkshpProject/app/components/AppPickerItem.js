import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import AppText from '../config/AppText'
import AppColors from '../config/AppColors'

export default function AppPickerItem({onPress, label}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <AppText style={styles.text}>{label}</AppText>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.summerSky,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 250,
        marginTop: 10,
        borderRadius: 20,
    },
    text: {
        color: AppColors.white,
        alignItems: 'center',
    }
})