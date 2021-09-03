import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ChooseScreen} from '../screens/ChooseScreen';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {RegisterScreen} from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Appearance, useColorScheme } from 'react-native';
import { useTheme } from 'react-native-paper';


const Stack = createStackNavigator();
const CombineDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    secondary: '#2d2d2d',
    primary: '#576e8a',
    accent: '#112b43',
    disabled: 'rgba(255, 255, 255, 0.1)',
    backdrop: 'white'
    // background: 'rgba(205,205,205,.7)',
  },
};
const CombineDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    accent: '#576e8a',
    background: 'black',
    primary: '#112b43',
    text: 'white',
    backdrop: '#576e8a',
    disabled: 'rgba(0, 0, 0, 0.1)',
  },
};
//  const colorScheme = Appearance.getColorScheme();
export const StackLogin = () => {
  // const scheme = useColorScheme();
  
  const {darkTheme} = useSelector((state: RootState) => state.Ui);
  // console.log(darkTheme)
  const { colors } = useTheme()
  return (
    <PaperProvider theme={darkTheme ? CombineDarkTheme : CombineDefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerTintColor: darkTheme ? 'white' : 'black',
            headerStyle: {
              backgroundColor: darkTheme ? 'black' : 'white',
            },
          }}>
          <Stack.Screen name="Iniciar Sesion" component={LoginScreen} />
          <Stack.Screen name="Escoger tipo" component={ChooseScreen} />
          <Stack.Screen name="Registrarse" component={RegisterScreen} />
          <Stack.Screen name="Principal" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
