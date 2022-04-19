import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppColors from '../config/AppColors'
import AppScreen from '../config/AppScreen'
import AppListItem from '../components/AppListItem'
import AppHeader from '../components/AppHeader'
import DataManager from '../config/DataManager'
import AppCard from '../components/AppCard'
import AppText from '../config/AppText'

const getPayment = (paymentid) => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getPayment(user, paymentid);
}

export default function DashboardScreen({route}) {
  const upcomingPayment = getPayment(2);
  const recentPayment = getPayment(1);
  return (
    <AppScreen style={styles.container}>
      <AppHeader>
        <AppListItem
          image={route.params.paramImage} 
          title={route.params.paramName}
          subtitle={route.params.paramEmail}/>
      </AppHeader>
      <View style={styles.title}>
        <AppText>Upcoming Payment</AppText>
      </View>
      {upcomingPayment.length>0 ? <AppCard
        title= {upcomingPayment[0].title}
        subtitle= {'$'+upcomingPayment[0].amount+' due on '+upcomingPayment[0].due}
        frequency= {upcomingPayment[0].frequency+' Payment'}
        image= {upcomingPayment[0].image}
      /> : <AppCard/>}
      <View style={styles.title}>
        <AppText>Most Recent Payment</AppText>
      </View>
      {recentPayment.length>0 ? <AppCard
        title= {recentPayment[0].title}
        subtitle= {'$'+recentPayment[0].amount+' due on '+recentPayment[0].due}
        frequency= {recentPayment[0].frequency+' Payment'}
        image= {recentPayment[0].image}
      /> : <AppCard/>}
    </AppScreen>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.mustard,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    width: '85%',
  }
})