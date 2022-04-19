import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import AppColors from '../config/AppColors'
import AppScreen from '../config/AppScreen'
import AppHeader from '../components/AppHeader'
import AppIconHeader from '../components/AppIconHeader'
import AppPicker from '../components/AppPicker'
import AppText from '../config/AppText';
import AppButton from '../config/AppButton';
import AppTextInput from '../config/AppTextInput';
import DataManager from '../config/DataManager';
import AppImage from '../components/AppImage';
import * as ImagePicker from 'expo-image-picker';

const frequencies = [
  {label: "One-Off", value:1},
  {label: "Weekly", value:2},
  {label: "Fornightly", value:3},
  {label: "Monthly", value:4},
  {label: "Yearly", value:5}
]

export default function AddPaymentScreen({navigation}) {
  const[title, setTitle] = useState("");
  const[frequency, setFrequency] = useState("");
  const[amount, setAmount] = useState("");
  const[due, setDue] = useState("");
  const [image, setImage] = useState(null);

  const[titleError, setTitleError] = useState("");
  const[frequencyError, setFrequencyError] = useState("");
  const[amountError, setAmountError] = useState("");
  const[dueError, setDueError] = useState("");
  const[imageError, setImageError] = useState("");

  const doErrorCheck = () => {
    setTitleError(title.length>0 ? "": "Please set a valid Payment Title")
    setFrequencyError(frequency? "": "Please set a valid Payment Frequency")
    setAmountError(amount.length>0 ? "": "Please set a valid Payment Amount")
    setDueError(due.length>0 ? "": "Please set a valid Payment Due Date")
    setImageError(image? "": "Please set a valid Image")
    return((title.length>0) && (frequency)? true : false && (amount.length>0) && (due.length>0))
  }

  const addBook = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const payments = commonData.getPayments(user);
    const paymentID = payments.length+1;
    const newPayment = {
      userid: user,
      id: paymentID,
      title: title,
      frequency: frequency.label,
      amount: amount,
      due: due,
      image: image,
    }

    commonData.addBook(newPayment);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <AppScreen style={styles.container}>
      <AppHeader>
        <AppIconHeader icon="cash-plus" title="Add Payment"/>
      </AppHeader>
      
      <View style={styles.inputContainer}>
        <AppTextInput
          autoCorrect={false}
          icon="rename-box"
          placeholder="Title"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />
        {titleError.length>0 ? <AppText style={styles.errorAppText}>{titleError}</AppText> : <></>}
        <AppPicker 
          selectItem = {frequency}
          onSelectItem = {item => setFrequency(item)}
          data={frequencies} 
          icon="timer" 
          placeholder="Frequency"
        />
        {frequencyError.length>0 ? <AppText style={styles.errorAppText}>{frequencyError}</AppText> : <></>}
        <AppTextInput
          autoCorrect={false}
          icon="cash"
          placeholder="Amount"
          value={amount}
          onChangeText={(inputText) => setAmount(inputText)}
        />
        {amountError.length>0 ? <AppText style={styles.errorAppText}>{amountError}</AppText> : <></>}
        <AppTextInput
          autoCorrect={false}
          icon="calendar-range"
          placeholder="Due Date"
          value={due}
          onChangeText={(inputText) => setDue(inputText)}
        />
        {dueError.length>0 ? <AppText style={styles.errorAppText}>{dueError}</AppText> : <></>}
        <AppImage onPress={pickImage} image={image}/>
        {imageError.length>0 ? <AppText style={styles.errorAppText}>{imageError}</AppText> : <></>}
      </View>

      <View style={styles.buttonContainer}>
        <AppButton 
          title='Add' 
          style={styles.lightButton}
          onPress={() =>{
            if(doErrorCheck()){
              addBook();
              navigation.navigate("MyPayments")
            }
          }}
        />
      </View>
      
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.mustard,
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 370,
    width: 250,
    marginTop: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 60,
  },
  lightButton: {
    backgroundColor: AppColors.summerSky,
  },
  errorAppText:{
    color: 'red',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 2,
    marginBottom: 2,
  },
})