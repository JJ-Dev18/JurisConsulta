import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator