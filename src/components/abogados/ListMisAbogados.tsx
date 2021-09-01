import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Abogado } from './Abogado';

export const ListMisAbogados = () => {
  return (
    <View style={{alignItems: 'center',flex: 1,marginTop: 20}}>
     <View style={styles.container}>
       <Text>No se encontraron Abogados</Text>
     </View>
      {/* <Abogado />
      <Abogado />
      <Abogado />
      <Abogado /> */}
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor : 'white',
      width: '90%',
      height : 200,
      padding: 20,
      elevation: 3,
      alignItems: 'center',
      justifyContent : 'center'
    }
});