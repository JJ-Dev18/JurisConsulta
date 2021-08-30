import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const CardComprar = () => {

   const {colors} = useTheme();
  return (
    <View style={{...styles.card}}>
      <View style={styles.ring}>
        <View style={styles.ring2}></View>
      </View>
      <View style={{}}>
        <Text style={styles.user}>JURISCONSULTA</Text>
      </View>
      <View style={{alignItems: 'flex-start',justifyContent:'space-around',marginTop:20}}>
        <Image
          style={{width: 60, height: 40, }}
          source={{
            uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630283052/pngwing.com_2_kw1kdi.png',
          }}
        />
        <Text style={styles.saldo}>$ 0 </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Text style={styles.user}>JUAN JOSE M.</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://res.cloudinary.com/dbi95d6gs/image/upload/v1630290630/Logo/Logo_JC_letras_blancas_rkhw5p.png',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#485767',
    width: '100%',
    height: 200,
    marginTop: 20 ,
    elevation: 3,
    borderRadius: 20,
    // backfaceVisibility: 'hidden',
    borderWidth: 1,

    borderColor: 'rgba(255, 255, 255, 0.1)',

    padding: 17,
    flexDirection: 'column',

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  saldo: {
    fontFamily: 'card',
    color: 'white',
    fontSize: 15,
    letterSpacing: 8,
    marginTop: 15,
  },
  user: {
    color: 'white',
    letterSpacing: 5,
    fontFamily: 'card',
  },
  ring: {
    position: 'absolute',
    backgroundColor: undefined,
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 40,
    borderColor: 'rgba(255, 255, 255, 0.1);',
    bottom: -120,
    right: -150,
  },
  ring2: {
    position: 'absolute',
    backgroundColor: undefined,
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 30,
    borderColor: 'rgba(255, 255, 255, 0.1);',
    bottom: -120,
    right: -10,
  },
});