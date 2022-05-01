import { useNavigation } from '@react-navigation/core'
import {Text, View, Button } from 'react-native'
import * as React from 'react';

const HomeScreen = () => {
    const navigation = useNavigation()
  
    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize : 18}}>Bienvenue sur My Tattoo !</Text>
          <Button title="Login" onPress={() => navigation.navigate('Login')}/>
          <Button title="Leave" onPress={() => navigation.navigate('Leave')}/>
          <Button
            title="📷"
            color="black"
            onPress={() => navigation.navigate('Camera')}
          />      
        </View>
      );
  }
  export default HomeScreen