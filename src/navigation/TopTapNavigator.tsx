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
import BarraBusqueda from '../components/cliente/abogados/BarraBusqueda';
import { DrawerScreenProps } from '@react-navigation/drawer';
import TarjetaCredito from '../components/comprar/formMetodos/FormMetodos';
import { StackComprar } from './StackComprar';




const Tab = createMaterialTopTabNavigator();
interface Props extends DrawerScreenProps<any,any> {}

function TopTapNavigator({navigation}: Props) {
  //  const navigator = useNavigation();
  
   const { colors } = useTheme()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      
      headerLeft: undefined,
     
      
    
    });
  });

  return (
    <Tab.Navigator
       
      tabBarPosition= 'bottom'
      style={{
        // shadowColor: 'transparent',
        elevation: 6,
        height: 20
      }}
      sceneContainerStyle={{
        
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: colors.primary},
        tabBarPressColor : colors.accent ,
        tabBarInactiveTintColor: colors.accent,
        tabBarIndicatorStyle: {backgroundColor: colors.background},
       
      

        tabBarIcon: ({color, focused}) => {
          // color = colors.primary;
          focused = true;
          let iconName: string = '';
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;

            case 'Abogados':
              iconName = 'gavel';
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
      <Tab.Screen name="Comprar" component={StackComprar} />
      {/* <Tab.Screen name="Drawer" component={DrawerPrincipal} /> */}
    </Tab.Navigator>
  );
}

export default TopTapNavigator


