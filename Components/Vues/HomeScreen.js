import { useNavigation } from '@react-navigation/core'
import {StyleSheet, View, Button,Image } from 'react-native'
import * as React from 'react';

const HomeScreen = () => {
  const navigation = useNavigation()
  
  return (
      <View style={styles.container}>
        <Image style={styles.brandlogo}  source={require('../../assets/logo_app_2.png')}/>
        
        <Button
          title="📷"
          color="black"
          onPress={() => navigation.navigate('Camera')}
        />      
      </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  brandlogo: {
      height: 150,
      width: 500,
  },
  brand: {
    
    width: 600,
    paddingLeft: 50,
  }
})