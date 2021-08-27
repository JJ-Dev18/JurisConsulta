import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer, } from '@react-navigation/native';
// import DrawerNavigator from './src/navigation/DrawerNavigator';
import { StackLogin } from './src/navigation/StackLogin';

// declare global {
//   namespace ReactNativePaper {
//     interface ThemeColors {
//       myOwnColor: string;
//     }

//     interface Theme {
//       myOwnProperty: boolean;
//     }
//   }
// }
const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    secondary: '#2d2d2d',
    primary: '#576e8a',
    iconos: '#112b43',
  },
};
export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StackLogin />
      </NavigationContainer>
    </PaperProvider>
  );
}
