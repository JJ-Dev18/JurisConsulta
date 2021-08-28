import React ,{ useEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { AbogadosScreen } from '../screens/AbogadosScreen';
import { Comprar } from '../screens/Comprar';
import { useNavigation } from '@react-navigation/native';
import {Button} from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons';
import {  useTheme, Title } from 'react-native-paper';
import TopTapAbogado from './TopTapAbogados';
import DrawerNavigator from './DrawerNavigator';
import BarraBusqueda from '../components/abogados/BarraBusqueda';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { findNonSerializableValue } from '@reduxjs/toolkit';




const Tab = createMaterialTopTabNavigator();
interface Props extends DrawerScreenProps<any,any> {}

function TopTapNavigator({navigation}: Props) {
  //  const navigator = useNavigation();
  
   const { colors } = useTheme()
   console.log('este es el top navigator' , navigation)
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {height: 40},
      headerLeft: undefined,
      headerRight: () => (
        <Icon name="notifications" size={20} onPress={() => navigation.toggleDrawer()} />
      ),
    });
  });

  return (
    <Tab.Navigator
      style={{
        // shadowColor: 'transparent',
        elevation: 6,
        height: 20
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.background,
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: colors.primary},
        tabBarIconStyle: {borderColor: 'red'},
        tabBarInactiveTintColor: colors.accent,
        tabBarIndicatorStyle: {backgroundColor: colors.background},
        tabBarPressColor: 'red',

        tabBarIcon: ({color, focused}) => {
          // color = colors.primary;
          focused = true;
          let iconName: string = '';
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;

            case 'Abogados':
              iconName = 'people-outline';
              break;

            case 'Comprar':
              iconName = 'shopping-cart';
              break;
            case 'Drawer':
              iconName = 'reorder';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen name="Abogados" component={TopTapAbogado} />
      <Tab.Screen name="Comprar" component={Comprar} />
      {/* <Tab.Screen name="Drawer" component={DrawerPrincipal} /> */}
    </Tab.Navigator>
  );
}

export default TopTapNavigator


