import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {Button, TextInput, useTheme} from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {
  textButton : string,
}

export const RegisterForm = ({textButton,navigation}:Props) => {
  // const navigator = useNavigation();
  const [secure, setSecure] = React.useState(true);
  const { colors } = useTheme()
  // console.log(navigator)
  // const { colors }= useTheme()
  return (
    <View style={{...styles.container,backgroundColor:colors.background,flex:1}}>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630265600/Logo/J-removebg-preview_1_bjax4y.png',
        }}
      />
      <Text style={{...styles.title, color: colors.primary}}> Registrarse</Text>
      <TextInput
        mode="outlined"
        label="Nombres"
        style={styles.input}
        placeholder="Nombres"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Apellidos"
        style={styles.input}
        placeholder="Apellidos"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Correo electronico"
        style={styles.input}
        placeholder="Correo Electronico"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        style={styles.input}
        label="Contrasena"
        placeholder="Minimo 6 caracteres"
        secureTextEntry={secure}
        right={
          <TextInput.Icon
            color={colors.primary}
            name="eye"
            onPress={() => setSecure(!secure)}
          />
        }
      />

      <Button
        // icon="camera"
        style={styles.button}
        mode="contained"
        onPress={() => navigation.popToTop()}>
        {textButton}
      </Button>
    </View>
  );
};
export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  input: {
    marginTop: 10,
    width: '70%',
  },
  button: {
    marginTop: 20,
  },
  containerButtons: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
