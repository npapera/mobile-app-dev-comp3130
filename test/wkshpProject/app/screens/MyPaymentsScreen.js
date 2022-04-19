import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import AppColors from '../config/AppColors'
import AppScreen from '../config/AppScreen'
import AppHeader from '../components/AppHeader'
import AppIconHeader from '../components/AppIconHeader'
import AppCard from '../components/AppCard'
import DataManager from '../config/DataManager'

const getPayments = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getPayments(user);
}

export default function MyPaymentsScreen() {
  const paymentsList = getPayments();
  console.log(paymentsList);
  return (
    <AppScreen style={styles.container}>
      <AppHeader>
        <AppIconHeader icon="account-cash" title="My Payments"/>
      </AppHeader>
      <FlatList
        data = {paymentsList}
        keyExtractor = {payment => payment.id.toString()}
        renderItem = {({item}) =>
        <AppCard
        title= {item.title}
        subtitle= {'$'+item.amount+' due on '+item.due}
        frequency= {item.frequency+' Payment'}
        image= {item.image}
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