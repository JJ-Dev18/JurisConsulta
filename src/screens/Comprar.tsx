import React , { useState,useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { CardComprar } from '../components/comprar/CardComprar';
import { MetodosPago } from '../components/comprar/MetodosPago';
import FormMetodos from '../components/comprar/formMetodos/FormMetodos';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}
export const Comprar = ({navigation,route}:Props) => {
  const [comprar, setcomprar] = useState(false)
  const {colors} = useTheme()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])
  return (
    <View  style={{padding: 25,justifyContent: 'center',alignItems: 'center',flex: 1,width:'100%' ,backgroundColor:colors.background}}>

      <Text style={{...styles.title,color: colors.accent}}>Saldo</Text>
      <CardComprar /> 
      <MetodosPago navigation={navigation} route={route}/>
      {/* <Button style={styles.button} mode='contained' onPress={() => navigation.push('PSE')}>
        Comprar
      </Button> */}
      {/* <FormMetodos /> */}

      
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      width: '70%',
      marginTop: 30,
      elevation: 3 
    },
    title: {
      fontWeight : '600',
      fontSize: 25
    }
});