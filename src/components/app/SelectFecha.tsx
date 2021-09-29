import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/es'; 
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const SelectFecha = () => {
  
  const { colors } = useTheme()
  //  moment.locale('es');

   const date = new Date();
   const markedData = moment(date).locale('es');
   const [state, setstate] = useState({
     date,
     markedData: markedData,
     StringDate: markedData.format('LL'),
   });
  const sumarFecha = () => {
    let newDate = state.markedData.add(1, 'days');
    //  console.log(newDate)
    setstate({...state, StringDate: newDate.format('LL')});
  };
  const restarFecha = () => {
    let newDate = state.markedData.subtract(1, 'days');
    setstate({...state, StringDate: newDate.format('LL')});
  };
  return (
    <View style={styles.contador}>
      <TouchableOpacity
        onPress={restarFecha}
        style={{...styles.button, backgroundColor: colors.primary}}>
        <Icon name="arrow-left" color="white" />
      </TouchableOpacity>
      <Text style={{color: colors.text}}>{state.StringDate}</Text>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: colors.primary}}
        onPress={sumarFecha}>
        <Icon name="arrow-right" color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
  contador: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  button: {
    width: 40,
    height: 40,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});