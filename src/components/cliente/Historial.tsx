import * as React from 'react';
import { Picker, TouchableOpacity, TouchableOpacityBase, View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Text, useTheme } from 'react-native-paper';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Historial = () => {
 
  const {colors} = useTheme()
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  return (
    <View
      style={{
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:colors.background,
        height: '100%'
      }}>
      <View style={{width: '80%', justifyContent: 'center'}}>
        <Text style={{marginBottom:10}}>Filtro de busqueda :</Text>
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
            {
              type: 'select',
              name: 'Convenio',
              rules: {
                required: {
                  value: true,
                  message: 'Convenio es requerido',
                },
              },
              textInputProps: {
                label: 'Convenios',
                value: 'Todos lso convenios',
              },
              options: [
                {
                  label: 'Todos los conveios',
                  value: 1,
                },
                {
                  label: 'etc',
                  value: 2,
                },
              ],
            },
          ]}
        />
      </View>
      <View style={{width: '100%'}}>
        <TouchableOpacity
          style={{...styles.botton, borderColor: colors.primary}}>
          <Icon
            name="shopping-basket"
            color="white"
            style={{
              marginRight: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              padding: 10,
            }}
          />
          <Text>Mis compras </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botton, borderColor: colors.primary}}>
          <Icon
            name="file-video"
            color="white"
            style={{
              marginRight: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              padding: 10,
            }}
          />
          <Text>Videollamadas </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botton, borderColor: colors.primary}}>
          <Icon
            name="comments"
            color="white"
            style={{
              marginRight: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              padding: 10,
            }}
          />
          <Text>Mensajes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    botton:{
      flexDirection:'row',
      alignItems:'center',
      padding: 10,
      borderWidth:2 ,
      marginTop:10,
      height:60
    }
});
export default Historial;
