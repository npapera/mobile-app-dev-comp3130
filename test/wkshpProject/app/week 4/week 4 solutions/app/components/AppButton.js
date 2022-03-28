import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

function AppButton({title}) {
    return (
        <TouchableOpacity onPress={() => console.log(title)}>
            <View style={styles.container}>
                <Text>
                 title
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    //add styles here
})


export default AppButton;