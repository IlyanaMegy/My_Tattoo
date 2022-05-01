import { registerRootComponent } from "expo";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './Vues/Camera';
import LoginScreen from "./Vues/LoginScreen";
import HomeScreen from "./Vues/HomeScreen";
import LeaveScreen from "./Vues/Leave";

//https://github.com/mattfrances/FirebaseExpoAuthentication/blob/main/App.js

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown : false}} name="Login" component={LoginScreen} options={{ title: "Connexion" }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }}/>
        <Stack.Screen name="Leave" component={LeaveScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



registerRootComponent(App);