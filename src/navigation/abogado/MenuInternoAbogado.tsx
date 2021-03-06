import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Avatar,
  Paragraph,
  useTheme,
  Text,
  Drawer as DrawerPaper,
  Switch,
} from 'react-native-paper';
import {View,  StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SwitchTheme } from '../../components/app/SwitchTheme';

export const MenuInternoAbogado = ({navigation, setDark,setLigth}: any) => {
  const {colors} = useTheme();
  const [active, setActive] = React.useState('Home');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isTheme, setIsTheme] = React.useState(false);
    const onToggleSwitchTheme = () => {
      setIsTheme(!isTheme);
      isTheme ? setLigth() : setDark();
    };
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 10,
        }}>
        <Text>Estado: {isSwitchOn ? 'Disponible' : 'No Disponible'}</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color="#22bb33"
          style={{width: 100}}
        />
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
          label="Citas"
          active={active === 'citas'}
          onPress={() => {
            setActive('citas');
            navigation.navigate('MisCitas');
          }}
          icon={({size, color}) => (
            <Icon name="calendar-day" size={20} color={color} />
          )}
        />
        {/* <DrawerPaper.Item
          label="Clientes"
          active={active === 'clientes'}
          onPress={() => {
            setActive('clientes');
            navigation.navigate('clientes');
          }}
          icon={({size, color}) => (
            <Icon name="user-friends" size={20} color={color} />
          )}
        /> */}
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
        <SwitchTheme setDark={setDark} setLigth={setLigth}/>
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
