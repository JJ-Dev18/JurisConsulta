import React, { ReactChild } from 'react'
import { Chip, useTheme } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {
  children:ReactChild
}

export const ChipHora = ({children,navigation}:Props) => {
  const {colors} = useTheme()
  const hora = children.toString()
  
  return (
    <Chip
      mode="outlined"
      textStyle={{color: colors.text}}
      style={{width: 100, padding: 0}}
      onPress={() => navigation.navigate('Detalle cita',{
        hora 
      })}>
      {children}
    </Chip>
  );
}
