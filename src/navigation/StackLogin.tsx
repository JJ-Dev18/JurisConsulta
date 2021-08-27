import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ChooseScreen} from '../screens/ChooseScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {RegisterScreen} from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackLogin = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        // headerShown : false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}>
      <Stack.Screen name="Iniciar Sesion" component={LoginScreen} />
      <Stack.Screen name="Principal" component={HomeScreen} />
      <Stack.Screen name="Escoger tipo" component={ChooseScreen} />
      <Stack.Screen name="Registrarse" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
