import React from 'react'
import { View, Text } from 'react-native';
import BarPrincipal from '../components/BarPrincipal';
import { DrawerScreenProps } from '@react-navigation/drawer';
import DrawerNavigator from '../navigation/DrawerNavigator';

interface Props extends DrawerScreenProps <any, any> {}
export const HomeScreen = ({navigation,route}: Props) => {
  return (
    <View>
       {/* <BarPrincipal navigation={navigation} route={route}/> */}
       {/* <DrawerNavigator/> */}
    </View>
  )
}
