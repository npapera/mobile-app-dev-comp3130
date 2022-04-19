import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import AppText from '../config/AppText'
import AppColors from '../config/AppColors'

function AppCard({title, subtitle, frequency, image}) {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <AppText style={styles.header}>{title}</AppText>
        <AppText style={styles.title}>{frequency} Payment</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        marginBottom: 20,
        height: 200,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        height: 115,
        width: '100%',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 2,
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
    },
    subtitle: {
        fontSize: 14,
        marginLeft: 10,
    }
})