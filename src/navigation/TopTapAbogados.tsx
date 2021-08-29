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
        paddingBottom:10,
      }}
      sceneContainerStyle={{
        
      }}
      screenOptions ={{
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
      }}
   
     
      >
        
      <Tab.Screen name="Lista Abogados" component={ListAbogados} />
      <Tab.Screen name="Mis abogados" component={ListMisAbogados} />
    </Tab.Navigator>
  );
}

export default TopTapAbogado;

