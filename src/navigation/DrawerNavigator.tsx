import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';

import { useWindowDimensions, View, Image, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { Avatar, Drawer as DrawerPaper, Paragraph, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {  AbogadosScreen } from '../screens/AbogadosScreen';
import TopTapNavigator from './TopTapNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Drawer = createDrawerNavigator();
interface Props extends DrawerScreenProps<any,any> {}
function DrawerNavigator({navigation}:Props) {
  const {width} = useWindowDimensions();
   console.log(navigation)
   useEffect(() => {
     navigation.setOptions({
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

const MenuInterno = ({navigation}:any ) => {
  const {colors} = useTheme();
  const [active, setActive] = React.useState('');
    console.log(navigation);
  return (
    <DrawerContentScrollView
      
    >
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
          label="Perfil"
          active={active === 'first'}
          onPress={() => navigation.navigate('Home')}
          icon={({size,color}) => (
            <Icon
              name="person"
              size={20}
              color={color}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
        />
        <DrawerPaper.Item
          label="Abogados"
          active={active === 'second'}
          onPress={() => navigation.navigate('Doctores')}
          icon="gavel"
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