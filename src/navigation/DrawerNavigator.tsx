import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { HomeScreen } from '../HomeScreen';
import { StackLogin } from './StackLogin';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={StackLogin} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator