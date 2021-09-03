import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';

import { useWindowDimensions, View, Image, TouchableOpacity, Text, Button, StyleSheet,ScrollView } from 'react-native';
import { Avatar, Drawer as DrawerPaper, Paragraph, useTheme } from 'react-native-paper';

import TopTapNavigator from './TopTapNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PerfilCliente } from '../components/cliente/PerfilCliente';
import { Citas } from '../components/cliente/Citas';
import Historial from '../components/cliente/Historial';
import Cupones from '../components/cliente/Cupones';
import { useSelector ,useDispatch} from 'react-redux';
import { RootState } from '../store/store';
import { setThemeApp } from '../actions/ui';
import { Configuracion } from '../components/cliente/Configuracion';
import { Ayuda } from '../components/cliente/Ayuda';



const Drawer = createDrawerNavigator();
interface Props extends DrawerScreenProps<any,any> {}
function DrawerNavigator({navigation}:Props) {
  const {width} = useWindowDimensions();
  const { darkTheme } = useSelector((state: RootState) => state.Ui)
  const dispatch = useDispatch()
  const setTheme = () => {
     dispatch(setThemeApp())
  }
  const { colors } = useTheme()
   useEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
    })

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} setTheme={setTheme} />}
      screenOptions={{
        headerRight: () => (
          <Icon
            name="notifications"
            color={colors.primary}
            style={{marginRight: 20}}
            size={20}
            onPress={setTheme}
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
      <Drawer.Screen name="Home" component={TopTapNavigator} />
      <Drawer.Screen
        name="Perfil"
        options={{title: 'Mi perfil'}}
        component={PerfilCliente}
      />
      <Drawer.Screen name="Citas" component={Citas} />
      <Drawer.Screen name="Historial" component={Historial} />
      <Drawer.Screen name="Cupones" component={Cupones} />
      <Drawer.Screen name="Ayuda" component={Ayuda} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator

const MenuInterno = ({navigation,setTheme}:any ) => {
  const {colors} = useTheme();
  const [active, setActive] = React.useState('Home');
  return (
    <DrawerContentScrollView
      style={{backgroundColor: colors.background, height: '100%'}}>
      <View style={{...styles.contentAvatar, backgroundColor: colors.primary}}>
        <Avatar.Image
          style={styles.imgAvatar}
          source={{
            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
          }}
        />
        <View style={styles.contentInfo}>
          <Text style={styles.user}> Juan Jose Murillo </Text>
          <Paragraph style={styles.correoUser}>
            juanjomb1_vi@hotmail.com
          </Paragraph>
        </View>
      </View>

      <DrawerPaper.Section title="Principal">
        <DrawerPaper.Item
          label="Home"
          active={active === 'Home'}
          onPress={() => {
            setActive('Home');
            navigation.navigate('Home');
          }}
          icon={({size, color}) => <Icon name="home" size={20} color={color} />}
        />
        <DrawerPaper.Item
          label="Perfil"
          active={active === 'Perfil'}
          onPress={() => {
            setActive('Perfil');
            navigation.navigate('Perfil');
          }}
          icon={({size, color}) => (
            <Icon name="person" size={20} color={color} />
          )}
        />
        <DrawerPaper.Item
          label="Mis citas"
          active={active === 'citas'}
          onPress={() => {
            setActive('citas');
            navigation.navigate('Citas');
          }}
          icon={({size, color}) => (
            <Icon name="event" size={20} color={color} />
          )}
        />
        <DrawerPaper.Item
          label="Historial"
          active={active === 'historial'}
          onPress={() => {
            setActive('historial');
            navigation.navigate('Historial');
          }}
          icon={({size, color}) => (
            <Icon name="history" size={20} color={color} />
          )}
        />
        <DrawerPaper.Item
          label="Cupones"
          active={active === 'cupones'}
          onPress={() => {
            setActive('cupones');
            navigation.navigate('Cupones');
          }}
          icon="ticket"
        />
        <DrawerPaper.Item
          label="Ayuda"
          active={active === 'ayuda'}
          onPress={() => {
            setActive('ayuda');
            navigation.navigate('Ayuda');
          }}
          icon={({size, color}) => <Icon name="help" size={20} color={color} />}
        />

        <DrawerPaper.Item
          label="Configuracion"
          active={active === 'configuracion'}
          onPress={() => {
            setActive('configuracion');
            navigation.navigate('Configuracion');
          }}
          icon={({size, color}) => (
            <Icon name="settings" size={20} color={color} />
          )}
     
        />
      </DrawerPaper.Section>
      <DrawerPaper.Section>
        <DrawerPaper.Item
          label="DarkMode"
          active={active === 'second'}
          onPress={setTheme}
        />
        <DrawerPaper.Item
          label="Cerrar Sesion"
          active={active === 'second'}
          onPress={() => navigation.pop()}
        />
      </DrawerPaper.Section>
    </DrawerContentScrollView>
  );
};
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