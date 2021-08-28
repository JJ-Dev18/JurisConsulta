import React from 'react'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import BarPrincipal from '../components/login/BarPrincipal';
import { DrawerScreenProps } from '@react-navigation/drawer';
import DrawerNavigator from '../navigation/DrawerNavigator';
import { CardEspecializaciones } from '../components/Principal/CardEspecializaciones';
import Carousel from 'react-native-snap-carousel';
import { Paragraph, Card, Button } from 'react-native-paper';

interface Props extends DrawerScreenProps <any, any> {}
export const HomeScreen = ({navigation,route}: Props) => {

  const {width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      <View style={styles.msgBienvenida}>
        <Text style={styles.textBienvenida}>Bienvenido USERNAME </Text>
        <Paragraph style={styles.pBienvenida}>
          En JurisConsulta podras recibir Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Aliquid deserunt fuga omnis voluptates
          animi ducimus, vitae, doloremque atque iure corporis suscipit commodi
          a ratione, minus optio non consequuntur quod dignissimos.
        </Paragraph>
      </View>
      <View style={styles.contentCarousel}>
        <Carousel
          data={['nombre', 'dos', '44e', 'sedfasdfa']}
          renderItem={({item}: any) => <CardEspecializaciones />}
          sliderWidth={width}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />
      </View>
      <View>
        <Button mode="contained"> Premium </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
     flex : 1,
     alignItems : 'center',
     paddingTop:20 
    },
    msgBienvenida:{
      width:'90%',
      borderRadius: 20,
      elevation: 30,
      backgroundColor: 'white',
      padding: 20
    },
    textBienvenida : {
        color: 'gray',
        fontWeight: 'bold'
    },
    pBienvenida : {
        
    },
    contentCarousel : {
       marginTop : 30,
       height : 400
    }
});