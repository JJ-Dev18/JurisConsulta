import React, { useEffect } from 'react'
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';

import { StackLogin } from './StackLogin';
import { useWindowDimensions, View, Image, TouchableOpacity, Text } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {  AbogadosScreen } from '../screens/AbogadosScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const {width} = useWindowDimensions();
   const navigator = useNavigation();

   useEffect(() => {
     navigator.setOptions({
       headerShown: false,
     });
    
   }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false, // Oculta la hamburguesa
      }}>
      <Drawer.Screen
        name="Home"
        options={{title: 'Inicio'}}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Doctores"
        options={{title: 'Doctores'}}
        component={AbogadosScreen}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator


const MenuInterno = ({navigation}:DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>
      <View>
        <Avatar.Image
          size={100}
          source={{
            uri: 'https://otomatix.com.br/img/avatar/default.png',
          }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Doctores')}>
          <Text>Doctores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Iniciar Sesion')}>
          <Text>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}