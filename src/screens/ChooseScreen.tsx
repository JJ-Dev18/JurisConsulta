import React from 'react'
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import Tipo from '../components/login/Tipo';

export const ChooseScreen = () => {
  const { colors } = useTheme()
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Tipo
        title="Abogado"
        img="https://blog.lemontech.com/wp-content/uploads/2021/01/frases-de-abogados.jpg"
      />
      <Tipo
        title="Cliente"
        img="https://www.aiteco.com/webgestion/wp-content/uploads/personalizar-atenci%C3%B3n-cliente.jpg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
      flex: 1,
      alignItems : 'center',
      justifyContent: 'space-around',
      padding: 20
    }
});