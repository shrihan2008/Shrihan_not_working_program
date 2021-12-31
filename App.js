import * as React from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from './screens/home';
import IssLocationScreen from './screens/issLocation';
import MeteorScreen from './screens/meteor';
import 'react-native-gesture-handler'
const Stack=createStackNavigator()

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initalRouteName="Home" screenOptions={{headerShown:false}}>
       <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
       <Stack.Screen name="issLocation" component={IssLocationScreen}></Stack.Screen>
       <Stack.Screen name="meteor" component={MeteorScreen}></Stack.Screen>
            </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default  App