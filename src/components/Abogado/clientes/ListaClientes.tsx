import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import DB from '../../../api/DB';
import {AbogadosInterface} from '../../../interfaces/abogadosInterface';
import BarraBusqueda from '../../cliente/abogados/BarraBusqueda';
import useAbogados from '../../../hooks/useAbogados';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import { Cliente } from './Cliente';

interface Props extends StackScreenProps<any, any> {}

export const ListClientes = ({navigation}: Props) => {
  const {totalAbogados, isLoading, infoAbogados} = useAbogados();
  //  const { colors } = useTheme()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const {colors} = useTheme();
  if (isLoading) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 999,
          justifyContent: 'center',
          flex: 1,
        }}>
        <ActivityIndicator color={colors.backdrop} size={50} />
      </View>
    );
  }
  return (
    <ScrollView
      style={{
        padding: 10,
        backgroundColor: colors.background,
        paddingBottom: 100,
      }}>
      <BarraBusqueda />
      {infoAbogados.map(abogado => (
        <Cliente key={abogado._id} user={abogado} />
      ))}
    </ScrollView>
  );
};
