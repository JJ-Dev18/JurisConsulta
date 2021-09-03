import { useTheme} from 'react-native-paper';

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Avatar, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}
export const Chat = ({navigation}: Props) => {
  const {colors} = useTheme();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <View
        style={{
          backgroundColor: colors.background,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderBottomWidth:1,
          borderBottomColor:colors.accent
        }}>
        <Icon name="chevron-circle-left" size={25} color={colors.primary} onPress={()=> navigation.goBack()}/>
        <Avatar.Image
          size={35}
          source={{
            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
          }}
        />
        <Text style={{color: colors.text}}>
          {' '}
          Margarita Maria Rodriguez Ortiz{' '}
        </Text>
        <Icon
          name="video"
          style={{
            padding: 5,
            borderRadius: 100,
            color: colors.primary,
            backgroundColor: colors.background,
            borderColor: colors.backdrop,
          }}
          size={25}
        />
      </View>
      <View style={{flex: 1, backgroundColor:colors.background}}></View>
      <View
        style={{
          height: 50,
          borderTopColor: 'gray',
          justifyContent: 'space-around',
          flexDirection: 'row',
          borderTopWidth: 1,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',width:60}}>
          <Icon name="paperclip" size={25} color={colors.primary} />
          <Icon name="microphone" size={25} color={colors.primary} />
        </View>
        <TextInput style={{height: 45, width: 250}} />
        <Icon name="paper-plane" size={25} color={colors.primary} />
      </View>
    </View>
  );
};
