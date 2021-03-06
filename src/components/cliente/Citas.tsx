import React, {useState} from 'react'
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import { SelectFecha } from '../app/SelectFecha';

export const Citas = () => {
   
  
   const {colors } = useTheme()
   
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.background
      }}>
      <TouchableOpacity style={{...styles.agenda, borderColor: colors.primary,backgroundColor:colors.backdrop}}>
        <Icon name="calendar" color={colors.primary} size={18} />
        <Text>Agenda tu cita </Text>
      </TouchableOpacity>
      <SelectFecha/>

      <Surface style={styles.citas}>
        <Icon name="calendar" color={colors.primary} size={40} />
        <Text>No tienes citas en este dia </Text>
      </Surface>
    </View>
  );
}
const styles = StyleSheet.create({
  agenda: {
    width: '100%',
    height: 60,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderWidth: 1,
    marginBottom: 30,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  citas: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 400,
    padding: 30,
  },
});