import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any,any> {}

const BarPrincipal = ({navigation}: Props ) => (

  <Appbar style={styles.bottom}>
    <Appbar.Action
      icon="menu"
      onPress={() => navigation.toggleDrawer()}
    />
    {/* <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
    /> */}
  </Appbar>
);
export default BarPrincipal;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
});