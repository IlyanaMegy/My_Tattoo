import { registerRootComponent } from "expo";
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './Vues/Camera';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
      <Text style={{ fontSize : 18}}>Bienvenue sur My Tattoo !</Text>
      <Button
        title="📷"
        color="black"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Page d'accueil" }}/>
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);