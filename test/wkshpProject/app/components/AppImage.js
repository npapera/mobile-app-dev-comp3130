import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import AppColors from '../config/AppColors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

function AppImage({image, onPress}) {

    return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.camera}>
                <MaterialCommunityIcons 
                    name={"camera"} 
                    size={50} 
                    color={AppColors.white}
                />
            </View>
        </TouchableWithoutFeedback>
        {image && <Image source={{uri: image}} style={styles.image}/>}
    </View>
  )
}

export default AppImage

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.summerSky,
        height: 150,
        width: 250,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    camera: {
        backgroundColor: AppColors.pacificBlue,
        height: 150,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 125,
        width: '60%',
        marginLeft: 15,
        borderRadius: 20,
    }
})