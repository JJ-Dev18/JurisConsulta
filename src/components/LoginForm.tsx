import { useNavigation } from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


export const LoginForm = () => {
  const navigator = useNavigation()
  const [secure, setSecure] = React.useState(true);
  const {colors } = useTheme()
  // console.log(navigator)
  // const { colors }= useTheme()
  return (
    <View style={styles.container}>
      <Text style={{...styles.title,color : colors.iconos}}> Iniciar Sesion</Text>
      <TextInput
        mode="outlined"
        label="Usuario"
        style={styles.input}
        placeholder="Usuario"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        style={styles.input}
        mode='outlined'
        label="Contrasena"
        secureTextEntry={secure}
        right={<TextInput.Icon name="eye" onPress={() => setSecure(!secure)} />}
      />

      <View style={styles.containerButtons}>
        <Button
          // icon="camera"
          style={styles.button}
          mode="contained"
          onPress={() =>
            navigator.dispatch(
              CommonActions.navigate({
                name: 'Principal',
              }),
            )
          }>
          Iniciar Sesion
        </Button>
        <Button
          // icon="camera"
          style={styles.button}
          mode="contained"
          onPress={() =>
            navigator.dispatch(
              CommonActions.navigate({
                name: 'Escoger tipo',
              }),
            )
          }>
          Registrarse
        </Button>
      </View>
    </View>
  );
  }
export default LoginForm;

const styles = StyleSheet.create({
  container:{
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  title:{
    fontSize : 30,
    
  },
  input:{
    marginTop: 10,
    width: '70%'
  }
  ,
  button:{
    marginTop: 20
  },
  containerButtons : {
    width: '70%',
    flexDirection : 'row',
    justifyContent: 'space-around'
  }
});



 
