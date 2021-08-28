import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Paragraph } from 'react-native-paper';

export const Abogado = () => {
  return (
    <TouchableOpacity style={styles.content}>
      <Avatar.Image
        size={40}
        source={{
          uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
        }}
      />
      <View style={styles.contentInfo}>
        <Text> MAIRA FERNANDA NINO MORENO</Text>
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
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    elevation: 20,
    borderRadius: 20,
    borderColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowColor: '#fff',
    shadowOpacity: 0.6,
    shadowRadius: 3.86,
  },
  contentInfo: {
    flexDirection: 'column',
  },
  badge: {
    backgroundColor: 'yellow',
  },
});