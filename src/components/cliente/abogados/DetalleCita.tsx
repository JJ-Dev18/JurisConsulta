import React from 'react'
import { View } from 'react-native';
import { useTheme, Text, Avatar, Button } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { FormBuilder } from 'react-native-paper-form-builder';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any,any> {}
export const DetalleCita = ({navigation,route}:Props) => {
  
  const hora = route.params
  
  const {colors} = useTheme();
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  return (
    <View style={{backgroundColor: colors.background,flex:1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
          alignItems: 'center',
          padding: 5,
          borderBottomColor:'gray',
          borderBottomWidth : 1
        }}>
        <Text> 09/03/2021</Text>
        <Text>{hora?.hora}</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Avatar.Image
          source={{
            uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
          }}
        />
        <Text>Luisa Grass Blanco</Text>
      </View>
      <View style={{padding:40}}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'select',
              name: 'Cliente',

              rules: {
                required: {
                  value: true,
                  message: 'Anio is required',
                },
              },
              textInputProps: {
                label: 'Paciente',
                value: 'Juan Jose M',
              },
              options: [
                {
                  label: 'Juan Jose M',
                  value: 1,
                },
                {
                  label: 'Yensy Bernal',
                  value: 2,
                },
              ],
            },
            {
              type: 'select',
              name: 'Tipo de cita',
              rules: {
                required: {
                  value: true,
                  message: 'Mes es requerido',
                },
              },
              textInputProps: {
                label: 'Tipo de cita',
              },
              options: [
                {
                  label: 'Septiembre',
                  value: 1,
                },
                {
                  label: 'Agosto',
                  value: 2,
                },
                {
                  label: 'Julio',
                  value: 3,
                },
              ],
            },
            {
              type: 'text',
              name: 'Motivo',

              rules: {
                required: {
                  value: true,
                  message: 'Motivo is required',
                },
              },
              textInputProps: {
                label: 'Motivo',
              },
            },
            {
              type: 'text',
              name: 'Acudiente',

              rules: {
                required: {
                  value: true,
                  message: 'Acudiente is required',
                },
              },
              textInputProps: {
                label: 'Acudiente',
              },
            },
          ]}
        />
        <Button mode="contained"> Agendar cita </Button>
      </View>
    </View>
  );
}
