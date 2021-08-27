import React from 'react'
import { View, ImageBackground, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const image = {
  uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1629936091/Logo/pngtree-national-lawyer-consultation-day-simple-mobile-phone-poster-image_196125-removebg-preview_pqltuv.png',
};
export const LoadingScreen = () => {
  const {colors} =useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
          color: 'black',
        }}>
        {' '}
        Jurisconsulta{' '}
      </Text>
      <ActivityIndicator style={styles.spinner} size="large" color={colors.primary} />

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