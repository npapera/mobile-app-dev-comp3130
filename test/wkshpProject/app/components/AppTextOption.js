import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

import AppColors from '../config/AppColors'
import AppText from '../config/AppText'

function AppTextOption({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonBack}>
            <AppText style={styles.buttonText}> {title} </AppText>
        </View>
    </TouchableOpacity>
  )
}

export default AppTextOption

const styles = StyleSheet.create({
    buttonBack:{
        width: '60%',
        marginLeft: 10,
    },
    buttonText:{
        color: AppColors.black,
        fontSize: 18,
    },
})