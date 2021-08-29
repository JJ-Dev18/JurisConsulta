// import { BlurView } from '@react-native-community/blur';
import React from 'react'
import { View, Image, StyleSheet,Text } from 'react-native';

export const CardSaldo = () => {
  return (
    // <BlurView blurType="light" blurAmount={10}>
      <View style={styles.card}>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630265600/Logo/J-removebg-preview_1_bjax4y.png',
            }}
          />
        </View>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://image.shutterstock.com/image-illustration/credit-card-chip-silver-isolated-260nw-490291144.jpg',
            }}
          />
          <Text> $ 900 000 </Text>
        </View>
        <View>
          <Text>JUAN JOSE MURILLO </Text>
          {/* <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/credit-card-chip-silver-isolated-260nw-490291144.jpg',
          }}
        /> */}
        </View>
      </View>
    // </BlurView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    elevation: 10,
    
    // backfaceVisibility: 'hidden',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding :  10,
    overflow : 'hidden',
    flexDirection: 'column',

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 7,


  },
});