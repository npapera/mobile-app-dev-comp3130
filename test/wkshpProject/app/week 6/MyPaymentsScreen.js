import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import AppColors from '../config/AppColors'
import AppScreen from '../config/AppScreen'
import AppHeader from '../components/AppHeader'
import AppIconHeader from '../components/AppIconHeader'
import AppCard from '../components/AppCard'

const payments = [
  {
    id: 1,
    title: "Netflix",
    frequency: "Monthly",
    amount: "16",
    due: "Dec-22",
    image: require('../../assets/netflix.jpg')
  },
  {
    id: 2,
    title: "DisneyPlus",
    frequency: "Monthly",
    amount: "12",
    due: "April-22",
    image: require('../../assets/disney_plus.jpg')
  },
  {
    id: 3,
    title: "Amazon Prime",
    frequency: "Monthly",
    amount: "8",
    due: "April-22",
    image: require('../../assets/amazon.png')
  },
  {
    id: 4,
    title: "Car Rental",
    frequency: "Fortnightly",
    amount: "300",
    due: "April-22",
    image: require('../../assets/car_rental.jpg')
  }
]

export default function MyPaymentsScreen() {
  return (
    <AppScreen style={styles.container}>
      <AppHeader>
        <AppIconHeader icon="account-cash" title="My Payments"/>
      </AppHeader>
      <FlatList
        data = {payments}
        keyExtractor = {payments => payments.id.toString()}
        renderItem = {({item}) =>
        <AppCard
        title= {item.title}
        subtitle= {'$'+item.amount+' due on '+item.due}
        frequency= {item.frequency}
        image={item.image}
        />}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.mustard,
    flex: 1,
    alignItems: 'center',
  }
})