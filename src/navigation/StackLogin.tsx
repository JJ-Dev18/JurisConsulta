import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ChooseScreen} from '../screens/ChooseScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import { StackHome } from './StackHome';
import DrawerNavigator from './DrawerNavigator';

import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();

export const StackLogin = () => {
   const {colors} = useTheme();
 
  return (
    <Stack.Navigator
      // initialRouteName="Home"

      screenOptions={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="Iniciar Sesion" component={LoginScreen} />
      <Stack.Screen
        name="Escoger tipo"
        options={{presentation: 'modal'}}
        component={ChooseScreen}
      />
      <Stack.Screen name="Registrarse" component={RegisterScreen} />
      <Stack.Screen name="Principal" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
