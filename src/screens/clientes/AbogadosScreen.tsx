import React from 'react'
import { View,Text } from 'react-native';
import BarraBusqueda from '../../components/cliente/abogados/BarraBusqueda';
import { useTheme } from 'react-native-paper';
import TopTapAbogado from '../../navigation/cliente/TopTapAbogados';

export const AbogadosScreen = () => {
  const { colors } = useTheme()
  return (
    <View style={{padding: 15, backgroundColor: colors.background}}>
      <BarraBusqueda />
      <View style={{marginTop:60}}>
        
      </View>
    </View>
  );
}
