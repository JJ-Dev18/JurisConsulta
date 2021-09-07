import React, { useRef } from 'react'
import {
  View,
  ImageBackground,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { useTheme } from 'react-native-paper';
// import  { Easing } from 'react-native-reanimated';

const image = {
  uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630265600/Logo/J-removebg-preview_1_bjax4y.png',
};
export const LoadingScreen = () => {
  const {colors} =useTheme()
  const spinValue = useRef(new Animated.Value(0)).current

  // First set up animation
  Animated.timing(spinValue, 
    {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
    easing:Easing.ease
    
  }).start();

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <Animated.Image
        style={{width: 70, height: 70, transform: [{rotateY: spin}]}}
        source={{
          uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630290630/Logo/Logo_JC_letras_blancas_rkhw5p.png',
        }}
      />
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
          color: colors.text,
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