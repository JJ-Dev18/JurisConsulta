import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Comprar } from '../screens/Comprar';
import FormMetodos from '../components/comprar/formMetodos/FormMetodos';
import { useTheme, Title } from 'react-native-paper';
import FormTarjeta from '../components/comprar/formMetodos/FormTarjeta';

const Stack = createStackNavigator();

export const StackComprar = () => {
  const {colors } = useTheme()
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',

        headerTitleStyle: {color: 'white'},
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="Saldo" component={Comprar} />
      <Stack.Screen
        name="Formulario Pago"
        options={{title: ''}}
        component={FormMetodos}
      />
      <Stack.Screen
        name="Formulario Pago tarjeta"
        options={{title: 'Tarjeta de credito'}}
        component={FormTarjeta}
      />
    </Stack.Navigator>
  );
};
