import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';

import { StackLogin } from './StackLogin';
import { useWindowDimensions, View, Image, TouchableOpacity, Text, Button } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { Avatar, Drawer as DrawerPaper} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {  AbogadosScreen } from '../screens/AbogadosScreen';
import TopTapNavigator from './TopTapNavigator';
import BarraBusqueda from '../components/abogados/BarraBusqueda';

const Drawer = createDrawerNavigator();
interface Props extends DrawerScreenProps<any,any> {}
function DrawerNavigator({navigation}:Props) {
  const {width} = useWindowDimensions();
   const navigator = useNavigation();
   console.log(navigation)
   useEffect(() => {
     navigator.setOptions({
       headerShown: false,
     });
    })

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}

      screenOptions={{
        headerLeftLabelVisible : false,
        headerTitle:'',
        drawerLabelStyle: {color:'white'},
        drawerPosition: 'left',
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false, // Oculta la hamburguesa
      }}>
      <Drawer.Screen
        name="Home"
        component={TopTapNavigator}
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

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  const [active, setActive] = React.useState('');
  return (
    <DrawerContentScrollView>
      <DrawerPaper.Section title="Some title">
        <DrawerPaper.Item
          label="Home"
          active={active === 'first'}
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerPaper.Item
          label="Abogados"
          active={active === 'second'}
          onPress={() => navigation.navigate('Doctores')}
        />
      </DrawerPaper.Section>
    </DrawerContentScrollView>
  );
};
