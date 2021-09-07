import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Avatar, Chip, useTheme,Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SelectFecha } from '../../app/SelectFecha';
import { StackScreenProps } from '@react-navigation/stack';
import { ChipHora } from '../../app/ChipHora';

interface Props extends StackScreenProps<any, any> {}

export const CitasAbogado = ({navigation,route}: Props) => {
  const {colors} = useTheme();
  console.log(route)
  return (
    <View style={{padding: 15, backgroundColor: colors.background, flex: 1}}>
      <View style={{...styles.content, backgroundColor: colors.background}}>
        <Avatar.Image
          source={{
            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
          }}
        />
        <Text>Luisa Grass Blanco</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
        </View>
      </View>
      <SelectFecha />
      <View style={styles.contentDias}>
        <ChipHora navigation={navigation} route={route}>
          8:30 a.m
        </ChipHora>
        <ChipHora navigation={navigation} route={route}>
          9:30 a.m
        </ChipHora>
        <ChipHora navigation={navigation} route={route}>
          10:30 a.m
        </ChipHora>
        <ChipHora navigation={navigation} route={route}>
          11:30 a.m
        </ChipHora>
        <ChipHora navigation={navigation} route={route}>
          11:30 a.m
        </ChipHora>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    content:{
      height:250,
      elevation:2,
      alignItems:'center',
      justifyContent :'center',
      marginBottom: 30
    },
    contentDias:{
      width:'100%',
      height:200,
      flexWrap:'wrap',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center'
    }
});