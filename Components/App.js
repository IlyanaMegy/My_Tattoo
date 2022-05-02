import 'react-native-gesture-handler';
import { registerRootComponent } from "expo";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CameraScreen from './Vues/Camera';
import LoginScreen from "./Vues/LoginScreen";
import HomeScreen from "./Vues/HomeScreen";
import LeaveScreen from "./Vues/Leave";
import { createDrawerNavigator } from '@react-navigation/drawer';
//https://github.com/mattfrances/FirebaseExpoAuthentication/blob/main/App.js

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }}/>
        <Drawer.Screen name="Leave" component={LeaveScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{ title: "Connexion" , headerShown : false}} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



registerRootComponent(App);