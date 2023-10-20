import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from '@react-navigation/native';


import { db } from '../config';
import {auth} from "../config";
import { signOut } from 'firebase/auth';

export default function LogoutScreen() {
    const navigation = useNavigation();

 
 //ADICIONE O CÓDIGO

  
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});