import { StyleSheet, Platform, View, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, {useState} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColors from '../config/AppColors'
import AppText from '../config/AppText'
import AppPickerItem from './AppPickerItem'

export default function AppPicker({data, icon, placeholder, selectItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name={icon} 
                    size={25} 
                    color={AppColors.white}
                    style={styles.icon}
                />
                <AppText style={styles.text}>{selectItem? selectItem.label : placeholder}</AppText>
                <MaterialCommunityIcons 
                    name="chevron-down"
                    size={25} 
                    color={AppColors.white}
                    style={styles.drop}
                />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setModalVisible(false)}/>
            <View style={styles.list}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.value.toString()}
                    renderItem = {({item}) =>
                        <AppPickerItem 
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                }
                            }
                        />
                    }
                />
            </View>
        </Modal>
    </>
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
    text: {
        color: AppColors.white,
        fontSize: 18,
        fontFamily: Platform.OS == 'android' ? 'Roboto' : 'Cochin',
        flex: 1
    },
    icon: {
        marginLeft: 15,
    },
    drop: {
        marginRight: 15,
    },
    list: {
        alignItems: 'center',
    }
})