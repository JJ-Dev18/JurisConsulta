import React, {useState} from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CardEspecializaciones} from '../../components/Principal/CardEspecializaciones';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  Paragraph,
  Card,
  Button,
  useTheme,
  Surface,
  ProgressBar,
  Colors,
} from 'react-native-paper';
import ButtonVideo from '../../components/Principal/Fab';

interface Props extends DrawerScreenProps<any, any> {}
export const HomeScreenAbogado = ({navigation, route}: Props) => {
  const [activeIndex, setactiveIndex] = useState(0);
  const {width} = useWindowDimensions();
  const {colors} = useTheme();
  return (
    <Surface style={{...styles.container, backgroundColor: colors.background}}>
      <View
        style={{...styles.msgBienvenida, backgroundColor: colors.background}}>
        <Text style={{...styles.textBienvenida, color: colors.text}}>
          Bienvenido USERNAME{' '}
        </Text>
        <Paragraph>Completar Perfil </Paragraph>
        <ProgressBar
          style={{width: 300, height:10}}
          progress={0.5}
          color={colors.primary}
        />
      </View>

      <View style={styles.contentCarousel}>
        <Carousel
          data={['nombre', 'dos']}
          renderItem={({item}: any) => <CardEspecializaciones />}
          sliderWidth={width}
          itemWidth={200}
          inactiveSlideOpacity={0.9}
          onSnapToItem={index => {
            setactiveIndex(index);
          }}
        />
        <Pagination
          containerStyle={{bottom: 100, left: 140, position: 'absolute'}}
          dotsLength={2}
          activeDotIndex={activeIndex}
          dotStyle={{
            backgroundColor: colors.primary,
          }}
        />
      </View>
      <ButtonVideo />
      <View></View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  msgBienvenida: {
    width: '90%',
    borderRadius: 15,
    elevation: 30,
    backgroundColor: 'white',
    padding: 20,
  },
  textBienvenida: {
    color: 'gray',
    fontWeight: 'bold',
  },
  pBienvenida: {},
  contentCarousel: {
    marginTop: 30,
    height: 400,
  },
});
