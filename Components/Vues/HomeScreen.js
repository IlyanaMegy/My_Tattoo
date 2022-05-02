import { useNavigation } from '@react-navigation/core'
import {StyleSheet, ScrollView, Button,Image } from 'react-native'
import * as React from 'react';

const HomeScreen = () => {
  const navigation = useNavigation()
  
  return (
      <ScrollView style={styles.container}>
        <Image style={styles.brandlogo}  source={require('../../assets/logo_app_2.png')}/>
        <Image style={styles.tattoo}  source={require('../../assets/tattoo1.jpg')}/>

        <Image style={styles.tattoo}  source={require('../../assets/tattoo6.jpg')}/>

        <Image style={styles.tattoo}  source={require('../../assets/tattoo2.jpg')}/>

        <Image style={styles.tattoo}  source={require('../../assets/tattoo5.jpg')}/>
        <Button
          title="📷"
          color="black"
          onPress={() => navigation.navigate('Camera')}
        />      
      </ScrollView>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brandlogo: {
      height: 150,
      width: 500,
  },
  tattoo: {

    margin:20,
    marginLeft:80,
    height: 350,
    width:250
  }
})