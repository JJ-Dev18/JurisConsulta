import React from 'react'
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import Tipo from '../components/Tipo';

export const ChooseScreen = () => {
  const { colors } = useTheme()
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <Tipo title="Abogado" />
      <Tipo title="Cliente" />
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
      flex: 1,
      alignItems : 'center',
      justifyContent: 'space-around',
      padding: 20
    }
});