import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer, } from '@react-navigation/native';
// import DrawerNavigator from './src/navigation/DrawerNavigator';
import { StackLogin } from './src/navigation/StackLogin';
import { Provider } from 'react-redux';
import { RootState, store } from './src/store/store';
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
    background: 'rgba(205,205,205,.7)',
    primary: '#576e8a',
    accent: '#112b43',
  },
};
export default function App() {

  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StackLogin />
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}
