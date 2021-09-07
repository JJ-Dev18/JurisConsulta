import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen} from '../../screens/clientes/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme, Title} from 'react-native-paper';
import TopTapAbogado from '../cliente/TopTapAbogados';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackComprar} from '../cliente/StackComprar';
import { HomeScreenAbogado } from '../../screens/abogados/HomeScreenAbogado';
import { Consultorios } from '../../components/Abogado/Consultorios';
import TopTapClientes from './TopTapClientes';

const Tab = createMaterialTopTabNavigator();
interface Props extends DrawerScreenProps<any, any> {}

function TopTapNavigatorAbogado({navigation}: Props) {
  //  const navigator = useNavigation();

  const {colors} = useTheme();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:'Saldo $ 0',
      headerTitleStyle:{color:colors.text},
      headerLeft: undefined,
    });
  });

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      style={{
        // shadowColor: 'transparent',
        elevation: 6,
        height: 20,
      }}
      sceneContainerStyle={{}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: colors.primary},
        tabBarPressColor: colors.accent,
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

            case 'Clientes':
              iconName = 'user-friends';
              break;

            case 'Consultorios':
              iconName = 'building';
              break;
            case 'Drawer':
              iconName = 'reorder';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Inicio" component={HomeScreenAbogado} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen name="Clientes" component={TopTapClientes} />
      <Tab.Screen name="Consultorios" component={Consultorios} />
      {/* <Tab.Screen name="Drawer" component={DrawerPrincipal} /> */}
    </Tab.Navigator>
  );
}

export default TopTapNavigatorAbogado;
