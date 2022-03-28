import React from 'react';

import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

function AppScreen({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default AppScreen;