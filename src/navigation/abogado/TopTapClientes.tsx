import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';

import StackCliente from './StackCliente';
import { ListMisClientes } from '../../components/Abogado/clientes/ListMisClientes';

const Tab = createMaterialTopTabNavigator();

function TopTapClientes() {
  const navigator = useNavigation();
  const {colors} = useTheme();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      style={{
        shadowColor: 'transparent',
        elevation: 0,
        paddingBottom: 0,
      }}
      sceneContainerStyle={{}}
      screenOptions={{
        // tabBarLabelStyle: {color: 'white'},
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {backgroundColor: colors.accent},
        tabBarStyle: {backgroundColor: colors.primary},

        tabBarInactiveTintColor: colors.accent,
        // tabBarInactiveTintColor: colors.accent,
        // tabBarIndicatorStyle: {backgroundColor: colors.background},
      }}>
      <Tab.Screen name="Lista Clientes" component={StackCliente} />
      <Tab.Screen name="Mis Clientes" component={ListMisClientes} />
    </Tab.Navigator>
  );
}

export default TopTapClientes;
