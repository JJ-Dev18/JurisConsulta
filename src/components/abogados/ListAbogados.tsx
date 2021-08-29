import React , { useEffect} from 'react'
import { View, Text } from 'react-native';
import DB from '../../api/DB';
import {  AbogadosInterface } from '../../interfaces/abogadosInterface';
import { Abogado } from './Abogado';
import BarraBusqueda from './BarraBusqueda';
import { ListMisAbogados } from './ListMisAbogados';
import useAbogados from '../../hooks/useAbogados';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


export const ListAbogados = () => {

   const {totalAbogados,isLoading,infoAbogados}  = useAbogados()
   const { colors } = useTheme()
  if(isLoading) {
    return (
      <View style={{position:'absolute',top:0, zIndex:999,justifyContent: 'center',flex: 1 }}>
        <ActivityIndicator color="red" size={50}/>
        
      </View>
    )
  }
  return (
    <ScrollView style={{padding: 15}}>
      <BarraBusqueda />
     {
       infoAbogados.map(abogado => (
         <Abogado key={abogado._id} user={abogado}/>
       ))
     }
    </ScrollView>
  );
}
