import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Configuracion = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="paper" /> Terminos y condiciones{' '}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="paper" /> Cambiar Contrasenia
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="paper" /> Idiomas
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{

    },
    button: {

    }
});
