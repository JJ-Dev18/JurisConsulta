import React from 'react'
import { View, Text } from 'react-native';
import { Abogado } from './Abogado';
import BarraBusqueda from './BarraBusqueda';

export const ListAbogados = () => {
  return (
    <View style={{padding: 15}}>
      <BarraBusqueda />
      <Abogado />
      <Abogado />
      <Abogado />
      <Abogado />
      <Abogado />
    </View>
  );
}
