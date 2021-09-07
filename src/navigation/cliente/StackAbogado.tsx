import React from 'react'
import {Comprar} from '../../screens/clientes/Comprar';
import FormMetodos from '../../components/comprar/formMetodos/FormMetodos';
import {useTheme, Title} from 'react-native-paper';
import FormTarjeta from '../../components/comprar/formMetodos/FormTarjeta';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { PerfilAbogado } from '../../components/cliente/abogados/PerfilAbogado';
import { ListAbogados } from '../../components/cliente/abogados/ListAbogados';
import { Chat } from '../../components/cliente/abogados/Chat';
import { CitasAbogado } from '../../components/cliente/abogados/CitasAbogado';
import { DetalleCita } from '../../components/cliente/abogados/DetalleCita';

  const Stack = createStackNavigator();

export const StackAbogado = () => {

  const {colors} = useTheme();
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',

        headerTitleStyle: {color: 'white', fontSize: 15},
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
      <Stack.Screen name="Chat" options={{title: 'Chat'}} component={Chat} />
      <Stack.Screen name="CitasAbogado" component={CitasAbogado} />
      <Stack.Screen name="Detalle cita" component={DetalleCita} />
    </Stack.Navigator>
  );
};
  
export default StackAbogado;