import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'react-native-paper';

export const Configuracion = () => {
  const { colors } = useTheme()
  return (
    <View style={{padding: 20, backgroundColor: colors.background, flex: 1}}>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: colors.backdrop}}>
        <Icon
          name="leanpub"
          color={colors.primary}
          size={20}
          style={{
           
            marginRight: 100,
            borderRadius: 10,
          }}
        />
        <Text>Terminos y condiciones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: colors.backdrop}}>
        <Icon
          name="key"
          color={colors.primary}
          size={15}
          style={{
        
            marginRight: 100,
            borderRadius: 10,
          }}
        />
        <Text>Cambiar Contrasena</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button}>
        <Icon name="paper" />
        <Text>Idiomas</Text>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  button: {
    width: '100%',
    height: 60,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderWidth: 1,
    marginBottom: 30,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    borderRadius: 10,
  },
});
