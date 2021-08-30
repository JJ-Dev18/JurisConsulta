import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';


export const MetodosPago = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/credittcard.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/PSE.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ImageBackground
          resizeMode="contain"
          source={require('../../images/metodosPago/baloto.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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
    justifyContent: 'center'
    // backgroundColor: 'gray'
  },
  image:{
    width: '100%',
    height:40,
    justifyContent: 'center'
  }
});