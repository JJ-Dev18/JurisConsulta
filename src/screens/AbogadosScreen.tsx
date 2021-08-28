import React from 'react'
import { View,Text } from 'react-native';
import BarraBusqueda from '../components/abogados/BarraBusqueda';
import { useTheme } from 'react-native-paper';
import TopTapAbogado from '../navigation/TopTapAbogados';

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
