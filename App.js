import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//telas
import SignIn from './src/pages/Login/SignIn'
import Home from './src/pages/Home/index'
import Register from './src/pages/Login/Register'
import Loading from './src/pages/Services/loading'

import MainService from './app/services/mainservice'


const Stack = createStackNavigator();

export default class App extends React.Component { 
  state = {
    loaded: false
  }
  constructor(){
    super();
    MainService.load( v => this.setState({loaded: true}));
  }
  render (){
    return(
    <SafeAreaProvider>
      
      <NavigationContainer>
      {this.state.loaded ?
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} title="Login"/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator> 
      : <Loading/>}
        <StatusBar style="auto" />
        
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
}
