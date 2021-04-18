import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';

import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//telas
import SignIn from './src/pages/Login/SignIn'
import Home from './src/screens/index'
import Register from './src/pages/Login/Register'
import Loading from './src/pages/Services/loading'

import MainService from './app/services/mainservice'


const Stack = createStackNavigator();

const ApplicationContent = () => (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} title="Login"/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator> 
        <StatusBar style="auto" />
      </NavigationContainer>

)

export default class App extends React.Component { 
  
  render (){
    return(
      <Fragment>
        <IconRegistry icons={EvaIconsPack}/>
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <ApplicationContent />
          </ApplicationProvider>
      </Fragment>
    );
  }
}
