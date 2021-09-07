import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Paragraph, useTheme , Drawer as DrawerPaper, Switch} from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const MenuInternoCliente = ({navigation,setDark,setLigth}:any ) => {

  const {colors} = useTheme();
  const [active, setActive] = React.useState('Home');
   const [isTheme, setIsTheme] = React.useState(false);
   const onToggleSwitchTheme = () => {
     setIsTheme(!isTheme)
     isTheme ? setDark() : setLigth()
    };
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
            <Icon name="user-alt" size={20} color={color} />
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
            <Icon name="calendar-day" size={20} color={color} />
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
          icon={({size, color}) => (
            <Icon name="question-circle" size={20} color={color} />
          )}
        />

        <DrawerPaper.Item
          label="Configuracion"
          active={active === 'configuracion'}
          onPress={() => {
            setActive('configuracion');
            navigation.navigate('Configuracion');
          }}
          icon={({size, color}) => <Icon name="cogs" size={20} color={color} />}
        />
      </DrawerPaper.Section>
      <DrawerPaper.Section>
        <View style={{flexDirection:'row',alignItems:'center',padding:17}}>
          <Icon name={isTheme? "moon" : 'sun'} color={isTheme? "black" : 'white'} size={25}/>
          <Switch
            value={isTheme}
            onValueChange={onToggleSwitchTheme}
            color={colors.primary}
            style={{width: 40,marginLeft:10}}
            trackColor={{true:'black',false:"white"}}
          />
        </View>
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
    marginTop: -10,
  },
  contentInfo: {
    flexDirection: 'column',
    marginTop: 20,
    color: 'white',
  },
  user: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  correoUser: {
    color: 'white',
  },
  imgAvatar: {},
  title: {
    fontWeight: 'bold',
  },
});
