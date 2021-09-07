import React,{useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ChooseScreen} from '../screens/ChooseScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import {RegisterScreen} from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { setDarkTheme, setLightTheme } from '../actions/ui';


const Stack = createStackNavigator();

//  const colorScheme = Appearance.getColorScheme();
export const StackLogin = () => {
  const scheme = useColorScheme();
  const dispatch = useDispatch()

  useEffect(() => {
     AppState.addEventListener('change', (status)=>{
       if(status === 'active'){
         Appearance.getColorScheme() == 'dark'
           ? dispatch(setDarkTheme())
           : dispatch(setLightTheme());
       }
     })
  }, [])
  // useEffect(() => {
  //   if(scheme=='dark'){
  //     dispatch(setDarkTheme())
  //   }else{
  //     dispatch(setLightTheme())
  //   }
  // }, [scheme])

  const theme = useSelector((state: RootState) => state.Ui);
  // console.log(darkTheme)
  const { colors } = useTheme()
  console.log(theme.dark)
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          // initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerTintColor: theme.dark ? 'white' : 'black',
            headerStyle: {
              backgroundColor: theme.dark ? 'black' : 'white',
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
