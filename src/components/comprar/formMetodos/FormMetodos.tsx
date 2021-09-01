import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import { Button, RadioButton, Title } from 'react-native-paper';
import {  useDataForm } from '../../../helpers/contentFormMetods';
import { StackScreenProps } from '@react-navigation/stack';

// interface Props {
//   visible?: string
// }
interface Props extends StackScreenProps<any, any> {}
export const  FormMetodos = ({route,navigation}:Props) =>  {
   const params = route.params
   const [checked, setChecked] = React.useState('first');
  //  const [dataForm, setdataForm] = React.useState(formCreditCard);
   const { setstate,dataFormMethod} = useDataForm()

   useEffect(() => {
     if(params?.visible) {
        setstate(params?.visible) }
    
        navigation.setOptions({
          title:params?.titulo
    })
   }, [])
  //  dataForm[5].textInputProps?.style : {display: 'flex'};
  //  setdataForm(dataForm[5].textInputProps?.style = { display : 'flex'});
  // console.log(formCreditCard[5].textInputProps?.style? = { display : 'none' })
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      tipoPersona: '',
      tipoDocumento: '',
      numeroDocumento: '',
      nombres : '',
      apellidos : '',
      numeroTel : '',
    },
    mode: 'onChange',
  });

  return (
     <View style={styles.containerStyle}>

      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text> Usar mis datos </Text>

          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>

        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray= {dataFormMethod}
           
        />
        <Button
          mode={'contained'}
          onPress={handleSubmit((data: any) => {
            console.log('form data', data);
          })}>
          Comprar Saldo
        </Button>
      </ScrollView>
     </View>
    
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width:'100%'
  },
  scrollViewStyle: {
    
    padding: 40,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
  inputs:{
    width: '100%',
   
  }
});

export default FormMetodos;
