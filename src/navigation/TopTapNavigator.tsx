import React ,{ useEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { AbogadosScreen } from '../screens/AbogadosScreen';
import { Comprar } from '../screens/Comprar';
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';



const Tab = createMaterialTopTabNavigator();

function TopTapNavigator() {
   const navigator = useNavigation();
   const { colors } = useTheme()
   

    
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
      // screenOptions={{
      //   tabBarActiveTintColor: '#e91e63',
      //   tabBarLabelStyle: {fontSize: 12},
      //   tabBarStyle: {backgroundColor: 'powderblue'},
      //   tabBarIconStyle: {borderColor: 'black'},
      //   tabBarInactiveTintColor : 'black',
      //   tabBarIndicatorStyle : { backgroundColor : 'brown'},
      //   tabBarPressColor: 'red'

      // }}
      // screenOptions ={ ({route}) => {
      //   tabBarIcon: ({color, focused}) => {
      //     color = colors.primary;
      //     focused = true;
      //     let iconName: string = '';
      //     switch (route.name) {
      //       case 'Home':
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

      // }}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.iconos,
        tabBarLabelStyle: {fontSize: 12 ,fontWeight : 'bold'},
        tabBarStyle: {backgroundColor: colors.primary},
        tabBarIconStyle: {borderColor: 'red'},
        tabBarInactiveTintColor: colors.secondary,
        tabBarIndicatorStyle: {backgroundColor: colors.iconos},
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
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen name="Abogados" component={AbogadosScreen} />
      <Tab.Screen name="Comprar" component={Comprar} />
    </Tab.Navigator>
  );
}

export default TopTapNavigator


const options = ({color, focused,route}:any) => {
  let iconName: string = '';
  switch (route.name) {
    case 'Chat':
      iconName = 'chatbox-ellipses-outline';
      break;

    case 'Contacts':
      iconName = 'people-outline';
      break;

    case 'Albums':
      iconName = 'albums-outline';
      break;
  }

  return <Icon name={iconName} size={20} color={color} />;
};