import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import { ListAbogados } from '../components/abogados/ListAbogados';
import { ListMisAbogados } from '../components/abogados/ListMisAbogados';
import BarraBusqueda from '../components/abogados/BarraBusqueda';

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
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions ={{
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
      }}
   
      // screenOptions={({route}) => ({
      //   tabBarActiveTintColor: colors.background,
      //   tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      //   tabBarStyle: {backgroundColor: colors.primary},
      //   tabBarIconStyle: {borderColor: 'red'},
      //   tabBarInactiveTintColor: colors.accent,
      //   tabBarIndicatorStyle: {backgroundColor: colors.background},
      //   tabBarPressColor: 'red',

      //   tabBarIcon: ({color, focused}) => {
      //     focused = true;
      //     let iconName: string = '';
      //     switch (route.name) {
      //       case 'Inicio':
      //         iconName = 'home';
      //         break;

      //       case 'Abogados':
      //         iconName = 'people-outline';
      //         break;

      //       case 'Comprar':
      //         iconName = 'shopping-cart';
      //         break;
      //     }

      //     return <Icon name={iconName} size={20} color={color} />;
      //   },
      // })}
      >
        
      <Tab.Screen name="Lista Abogados" component={ListAbogados} />
      <Tab.Screen name="Mis abogados" component={ListMisAbogados} />
    </Tab.Navigator>
  );
}

export default TopTapAbogado;

