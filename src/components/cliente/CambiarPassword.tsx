import React from 'react'
import { View } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { Button, useTheme } from 'react-native-paper';
import { useForm } from 'react-hook-form';

export const CambiarPassword = () => {

  const {colors} = useTheme();
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  return (
    <View style={{padding:40}}>
      <FormBuilder
        control={control}
        setFocus={setFocus}
        formConfigArray={[
          {
            type: 'select',
            name: 'Anio',

            rules: {
              required: {
                value: true,
                message: 'Anio is required',
              },
            },
            textInputProps: {
              label: 'Anio',
              value: '2021',
            },
            options: [
              {
                label: '2020',
                value: 1,
              },
              {
                label: '2021',
                value: 2,
              },
              {
                label: '2022',
                value: 3,
              },
            ],
          },
          {
            type: 'select',
            name: 'Mes',
            rules: {
              required: {
                value: true,
                message: 'Mes es requerido',
              },
            },
            textInputProps: {
              label: 'Mes',
              value: 'Septiembre',
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
        ]}
      />
      <Button mode="contained"> Cambiar Contrasena</Button>
    </View>
  );
}
