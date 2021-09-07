import React, { useEffect } from 'react'
import { createDrawerNavigator,DrawerScreenProps } from '@react-navigation/drawer';

import { useWindowDimensions, StyleSheet,ScrollView, Alert } from 'react-native';
import { Avatar, Drawer as DrawerPaper, Paragraph, useTheme } from 'react-native-paper';

import TopTapNavigator from './cliente/TopTapNavigatorCliente';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MiPerfilCliente } from '../components/cliente/MiPerfilCliente';
import { Citas } from '../components/cliente/Citas';
import Historial from '../components/cliente/Historial';
import Cupones from '../components/cliente/Cupones';
import { useSelector ,useDispatch} from 'react-redux';
import { RootState } from '../store/store';
import { setDarkTheme, setLightTheme, setThemeApp } from '../actions/ui';
import { Configuracion } from '../components/cliente/Configuracion';
import { Ayuda } from '../components/cliente/Ayuda';
import { MenuInternoCliente } from './cliente/MenuInternoCliente';
import { useState } from 'react';
import { MenuInternoAbogado } from './abogado/MenuInternoAbogado';
import TopTapNavigatorAbogado from './abogado/TopTapNavigatorAbogado';
import { MiPerfilAbogado } from '../components/Abogado/MiPerfilAbogado';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';


const Drawer = createDrawerNavigator();
interface Props extends DrawerScreenProps<any,any> {}
function DrawerNavigator({navigation}:Props) {
  const {width} = useWindowDimensions();
  // const { darkTheme } = useSelector((state: RootState) => state.Ui)
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  const setDark = () => {
     dispatch(setDarkTheme())
  }
  const setLigth = () => {
    dispatch(setLightTheme())
  }
  const { colors } = useTheme()
   useEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
    })
    const handleError = (error:Error, isFatal:any) => {
      // fetch
      console.log(error, isFatal);
      Alert.alert('Un error inexperado a ocurrido', `Error: ${error.name}  ${error.message}`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    };

    setJSExceptionHandler((error, isFatal) => {
      console.log('caught global error');
      handleError(error, isFatal);
    }, true);

    setNativeExceptionHandler(errorString => {
      // do the things
      
    });

  return (
    <Drawer.Navigator
      drawerContent={props =>
        state ? (
          <MenuInternoCliente
            {...props}
            setDark={setDark}
            setLigth={setLigth}
          />
        ) : (
          <MenuInternoAbogado
            {...props}
            setDark={setDark}
            setLigth={setLigth}
          />
        )
      }
      screenOptions={{
        headerRight: () => (
          <Icon
            name="notifications"
            color={colors.primary}
            style={{marginRight: 20}}
            size={20}
            onPress={() => setState(!state)}
          />
        ),
        // drawerContentContainerStyle:{backgroundColor:'red'},
        headerStyle: {backgroundColor: colors.background},
        headerLeftLabelVisible: false,
        headerTitle: '',
        drawerLabelStyle: {color: colors.background},
        drawerPosition: 'left',
        headerTintColor: colors.primary,
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: true, // Oculta la hamburguesa
      }}>
      <Drawer.Screen
        name="Home"
        component={state ? TopTapNavigator : TopTapNavigatorAbogado}
      />
      <Drawer.Screen
        name="Perfil"
        options={{title: 'Mi perfil'}}
        component={state ? MiPerfilCliente : MiPerfilAbogado}
      />
      <Drawer.Screen name="MisCitas" component={Citas} />
      <Drawer.Screen name="Historial" component={Historial} />
      <Drawer.Screen name="Cupones" component={Cupones} />
      <Drawer.Screen name="Ayuda" component={Ayuda} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator


const styles = StyleSheet.create({
  contentAvatar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginTop: -10
    
  },
  contentInfo: {
    flexDirection: 'column',
    marginTop: 20,
    color: 'white',
  },
  user:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  correoUser:{
    color: 'white',
  },
  imgAvatar: {},
  title: {
    fontWeight: 'bold',
  },
});