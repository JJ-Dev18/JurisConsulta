import React from 'react'
import {Comprar} from '../screens/Comprar';
import FormMetodos from '../components/comprar/formMetodos/FormMetodos';
import {useTheme, Title} from 'react-native-paper';
import FormTarjeta from '../components/comprar/formMetodos/FormTarjeta';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { PerfilAbogado } from '../components/abogados/PerfilAbogado';
import { ListAbogados } from '../components/abogados/ListAbogados';

  const Stack = createStackNavigator();

export const StackAbogado = () => {

  const {colors} = useTheme();
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
       
        headerTitleStyle: {color: 'white',fontSize:15},
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.accent,
        },
      }}>
      <Stack.Screen name="ListaAbogados" component={ListAbogados} />
      <Stack.Screen
        name="PerfilAbogado"
        options={{title: 'Perfil'}}
        component={PerfilAbogado}
      />
    </Stack.Navigator>
  );
};

export default StackAbogado;