import React , { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { CardComprar } from '../components/comprar/CardComprar';
import { MetodosPago } from '../components/comprar/MetodosPago';

export const Comprar = () => {
  const [comprar, setcomprar] = useState(false)
  const {colors} = useTheme()
  return (
    <View style={{padding: 25,justifyContent: 'center',alignItems: 'center',flex: 1 }}>

      <Text style={{...styles.title,color: colors.accent}}>Saldo</Text>
      <CardComprar/> 
      {/* <Button style={styles.button} mode='contained' onPress={() => setcomprar(true)}>
        Comprar
      </Button> */}
      <MetodosPago />
      
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
      fontWeight : '400',
      fontSize: 25
    }
});