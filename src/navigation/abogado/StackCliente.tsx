import React from 'react';
import {useTheme, Title} from 'react-native-paper';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {Chat} from '../../components/cliente/abogados/Chat';
import { ListClientes } from '../../components/Abogado/clientes/ListaClientes';
import { PerfilCliente } from '../../components/Abogado/clientes/PerfilCliente';

const Stack = createStackNavigator();

export const StackCliente = () => {
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
      <Stack.Screen name="ListaClientes" component={ListClientes} />
      <Stack.Screen
        name="PerfilCliente"
        options={{title: 'Perfil'}}
        component={PerfilCliente}
      />
      <Stack.Screen name="Chat" options={{title: 'Chat'}} component={Chat} />
      {/* <Stack.Screen name="CitasAbogado" component={Citas} />
      <Stack.Screen name="Detalle cita" component={DetalleCita} /> */}
    </Stack.Navigator>
  );
};

export default StackCliente;
