import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
