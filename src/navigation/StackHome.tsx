import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ChooseScreen} from '../screens/ChooseScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export const StackHome = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown : true,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}>
      <Stack.Screen name="Iniciar Sesion" component={DrawerNavigator} />

    </Stack.Navigator>
  );
};
