import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Paragraph } from 'react-native-paper';
import { Usuario } from '../../interfaces/abogadosInterface';

interface Props {
  user : Usuario

}

export const Abogado = ({user}:Props) => {
  return (
    <TouchableOpacity style={styles.content}>
      <Avatar.Image
        size={40}
        source={{
          uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
        }}
      />
      <View style={styles.contentInfo}>
        <Text> {user.nombre}</Text>
        <Paragraph> Derecho Civil </Paragraph>
      </View>
      <View>
      <Badge style={styles.badge}>VIP</Badge>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    backgroundColor : 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    elevation: 9,
    borderRadius: 10,
    borderColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  contentInfo: {
    flexDirection: 'column',
  },
  badge: {
    backgroundColor: 'yellow',
  },
});