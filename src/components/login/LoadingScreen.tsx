import React from 'react'
import { View, ImageBackground, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';

const image = {
  uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630265600/Logo/J-removebg-preview_1_bjax4y.png',
};
export const LoadingScreen = () => {
  const {colors} =useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
      }}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <Image
        style={{width: 70, height: 70}}
        source={{
          uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630265600/Logo/J-removebg-preview_1_bjax4y.png',
        }}
      />
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
          color: 'black',
        }}>
        {' '}
        Jurisconsulta{' '}
      </Text>
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={colors.primary}
      />

      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
 
  image:{
    flex : .5 ,
   
    // justifyContent : 'center'
  },
  spinner: {
    //  position: 'absolute',
     left : 0,
     right : 0,
     

  }
  

});