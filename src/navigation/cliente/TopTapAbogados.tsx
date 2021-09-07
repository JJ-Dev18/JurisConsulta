import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import { ListAbogados } from '../../components/cliente/abogados/ListAbogados';
import { ListMisAbogados } from '../../components/cliente/abogados/ListMisAbogados';
import BarraBusqueda from '../../components/cliente/abogados/BarraBusqueda';
import StackAbogado from './StackAbogado';

const Tab = createMaterialTopTabNavigator();

function TopTapAbogado() {
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
      <Tab.Screen name="Lista Abogados" component={StackAbogado} />
      <Tab.Screen name="Mis abogados" component={ListMisAbogados} />
    </Tab.Navigator>
  );
}

export default TopTapAbogado;

