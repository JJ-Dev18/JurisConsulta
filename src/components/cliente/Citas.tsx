import React, {useState} from 'react'
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
export const Citas = () => {
   
   moment.locale('es')

   const date = new Date()
   const markedData = moment(date)
   const [state, setstate] = useState({
     date,
     markedData : markedData,
     StringDate: markedData.format('LL'),

   });
   const {colors } = useTheme()
   const sumarFecha = () => {
      let newDate = state.markedData.add(1, 'days');
    //  console.log(newDate)
     setstate({...state,StringDate:newDate.format('LL')})
    
   }
   const restarFecha= ()=> {
     let newDate = state.markedData.subtract(1,'days')
     setstate({...state, StringDate: newDate.format('LL')});
   }
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
      <View style={styles.contador}>
        <TouchableOpacity
           onPress={restarFecha}
          style={{...styles.button, backgroundColor: colors.primary}}>
          <Icon name="arrow-left" color="white" />
        </TouchableOpacity>
        <Text style={{color:colors.text}}>{state.StringDate}</Text>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: colors.primary}}
          onPress={sumarFecha}>
          <Icon name="arrow-right" color="white" />
        </TouchableOpacity>
      </View>

      <Surface style={styles.citas}>
        <Icon name="calendar" color={colors.primary} size={40} />
        <Text>No tienes citas en este dia </Text>
      </Surface>
    </View>
  );
}
const styles = StyleSheet.create({
    agenda:{
     width:'100%',
     height:60,
     paddingVertical:20,
     paddingHorizontal:100,
     borderWidth:1,
     marginBottom:30,
     backgroundColor: 'white',
     elevation: 3,
     flexDirection: 'row',
     justifyContent: 'space-around',
     borderRadius:10
     
    },
    contador: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center',
     marginBottom:40,
     width:'100%'
    },
    button:{
      width:40,
      height:40,
      
      borderRadius: 10,
      justifyContent : 'center',
      alignItems:'center'
    },
    citas:{
      backgroundColor:"white",
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-around',
     width:'100%',
     height:400,
     padding:30
    }
});