import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import GameScreen from './src/GameScreen';
import Checkdrop from './src/Checkdrop';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
    {/* {welcome ?  <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} /> : null} */}
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="drop" component={Checkdrop} options={{headerShown: false}} />
        
        <Stack.Screen name="game" component={GameScreen} options={{headerShown: false}} />
       
      </Stack.Navigator>
        
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})