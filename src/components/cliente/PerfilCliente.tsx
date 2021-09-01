import React,{useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Caption, Title, useTheme, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListDatos from '../abogados/ListDatos';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

export const PerfilCliente = ({navigation}: Props) => {
  
   useEffect(() => {
    navigation.setOptions({
      headerShown:true
    })  

   }, [])
  const {colors} = useTheme();
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
{/*     
      <Button
        style={styles.goBack}
        icon={({size, color}) => (
          <Icon name="arrow-left" size={20} color={color} />
        )}
        mode="contained"
        onPress={() => navigation.goBack()}>
        Atras
      </Button> */}

      <View style={styles.contentAvatar}>
        <Avatar.Image
          size={100}
          source={{
            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
          }}
        />
        <Caption>Cliente</Caption>
        <Title> Juan Jose Murillo Bernal</Title>
        <View style={styles.contentIconos}>
          <TouchableOpacity>
            <Icon
              name="comments"
              color={colors.primary}
              size={30}
              style={{borderWidth: 1, borderRadius: 10, padding: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="video"
              color={colors.primary}
              size={30}
              style={{borderWidth: 1, borderRadius: 10, padding: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '100%'}}>
        <ListDatos />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentAvatar: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentIconos: {
    marginTop:20,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  },
  goBack: {
    position: 'absolute',
    top: 10,
    left: -20,
    marginLeft: 30,
    width: 100,

    // borderRadius:100,
    color: 'white',
  },
});
