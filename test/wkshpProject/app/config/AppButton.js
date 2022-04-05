import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import AppColors from './AppColors'
import AppText from './AppText'

function AppButton({title, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonBack, style]}>
            <AppText style={styles.buttonText}> {title} </AppText>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonBack: {
        backgroundColor: AppColors.white,
        height: 50,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText:{
        color: AppColors.white,
        fontWeight: 'bold',
        fontSize: 24,
    },
})

export default AppButton;