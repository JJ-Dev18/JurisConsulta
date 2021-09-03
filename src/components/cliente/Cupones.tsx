import * as React from 'react';
import { View, Picker, Text } from 'react-native';
import { Searchbar, Button, TextInput, useTheme, Paragraph } from 'react-native-paper';
import { FormBuilder } from 'react-native-paper-form-builder';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useForm } from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Cupones = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('2020')
  const { colors } = useTheme()
   const {control, setFocus, handleSubmit} = useForm({
     defaultValues: {
       email: '',
       password: '',
     },
     mode: 'onChange',
   });
  // const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',

          justifyContent: 'space-around',
          padding: 20,
        }}>
        {/* <Icon name='info'/> */}
        <TextInput
          style={{width: 200, height: 40}}
          placeholder="Ingresa tu codigo"
        />
        <Button style={{height: 40}} mode="contained">
          Registrar
        </Button>
      </View>
      <View style={{padding:20, justifyContent: 'center'}}>
        <Text style={{marginBottom: 10}}>Filtro de busqueda :</Text>
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
      </View>
      <View style={{padding: 20}}>
        <Text
          style={{color: colors.text, textAlign: 'center', marginBottom: 10}}>
          Sin cupones
        </Text>
        <Paragraph>
          No se ha redimido ningun cupon en el mes seleccionado
        </Paragraph>
      </View>
    </View>
  );
};

export default Cupones;
