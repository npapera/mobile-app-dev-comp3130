import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default class DataManager {
    static myInstance = null;
    userID = "";

    payments = [
        {
            userid: "user1",
            id: 1,
            title: "Netflix",
            frequency: "Monthly",
            amount: "16",
            due: "20-April-22",
            image: require('../../assets/netflix.jpg')
        },
        {
            userid: "user1",
            id: 2,
            title: "DisneyPlus",
            frequency: "Monthly",
            amount: "12",
            due: "21-May-22",
            image: require('../../assets/disney_plus.jpg')
        },
        {
            userid: "user1",
            id: 3,
            title: "Amazon Prime",
            frequency: "Monthly",
            amount: "8",
            due: "22-June-22",
            image: require('../../assets/amazon.png')
        },
        {
            userid: "user1",
            id: 4,
            title: "Car Rental",
            frequency: "Fortnightly",
            amount: "300",
            due: "23-Dec-22",
            image: require('../../assets/car_rental.jpg')
        },
        {
            userid: "user2",
            id: 1,
            title: "Iron Man Suit",
            frequency: "One-Off",
            amount: "10M",
            due: "21-April-22",
            image: require('../../assets/iron_man_suit.jpg')
        },
        {
            userid: "user2",
            id: 2,
            title: "Avengers Tower",
            frequency: "One-Off",
            amount: "100M",
            due: "22-May-22",
            image: require('../../assets/avengers_tower.png')
        },
        {
            userid: "user2",
            id: 3,
            title: "Stark Mansion",
            frequency: "One-Off",
            amount: "40M",
            due: "23-June-22",
            image: require('../../assets/stark_mansion.jpg')
        },
        {
            userid: "user3",
            id: 1,
            title: "Iron Spider Suit",
            frequency: "One-Off",
            amount: "5M",
            due: "21-April-22",
            image: require('../../assets/spidie_suit.jpg')
        },
        {
            userid: "user3",
            id: 2,
            title: "University",
            frequency: "Yearly",
            amount: "40K",
            due: "22-Nov-22",
            image: require('../../assets/mit.jpg')
        }
    ]

    users = [
        {
          id: "user1", 
          username: "jdoe7",
          fullname: "John Doe",
          email: "jdoe@gmail.com",
          password: "7777",
          image: require('../../assets/john.jpg')
        },
        {
          id: "user2", 
          username: "tstark9",
          fullname: "Tony Stark",
          email: "tstark@gmail.com",
          password: "9999",
          image: require('../../assets/t_stark.png')
        },
        {
          id: "user3", 
          username: "pp3",
          fullname: "Peter Parker",
          email: "pp3@gmail.com",
          password: "3333",
          image: require('../../assets/holland.jpg')
        }
    ];

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    addBook(payment){
        this.payments.push(payment);
    } 

    getUserInfo(id){
        return this.users.filter((user) => user.id === id);
    }

    getPayments(id){
        return this.payments.filter((payment) => payment.userid === id);
    }

    getPayment(id, paymentid){
        return this.payments.filter((payment) => payment.userid === id && payment.id === paymentid);
    }

}

const styles = StyleSheet.create({})