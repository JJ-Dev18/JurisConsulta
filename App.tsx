import 'react-native-gesture-handler';
import React from 'react';

// import DrawerNavigator from './src/navigation/DrawerNavigator';
import { StackLogin } from './src/navigation/StackLogin';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './src/store/store';
import ErrorBoundary from './src/components/ErrorBoundary';
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

export default function App() {

 
  return (
    <Provider store={store}>
        <ErrorBoundary>
        <StackLogin />
        </ErrorBoundary>
    </Provider>
  );
}
