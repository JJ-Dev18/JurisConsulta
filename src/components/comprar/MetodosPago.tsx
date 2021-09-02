import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

interface Props extends StackScreenProps<any, any> {}

export const MetodosPago = ({navigation}:Props) => {
 const { colors } = useTheme()
  return (
    <View style={{...styles.container,backgroundColor:colors.background}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Formulario Pago tarjeta', {
            titulo: 'Tarjeta de credito',
            visible: 'flex',
          })
        }>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/credittcard.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Formulario Pago', {
            titulo: 'PSE',
            visible: 'flex',
          })
        }>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/PSE.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Formulario Pago', {
            titulo: 'Baloto',
          })
        }>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/baloto.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Formulario Pago', {
            titulo: 'Efecty',
          
          })
        }>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/efecty.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    
  container:{
    width: 400,
    height:100,
    backgroundColor : 'white',
    borderRadius: 10,
    marginTop: 20,
    elevation : 1,
    flexDirection : 'row',
    alignItems:'center',
    alignContent:"center",
    padding:0 ,
    justifyContent: 'space-around'
    
  },
  button:{
    width:80 ,
    height:'45%',
    borderWidth: 1 ,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: 'white'
    // backgroundColor: 'gray'
  },
  image:{
    width: '100%',
    height:40,
    justifyContent: 'center'
  }
});