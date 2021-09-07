import {AnyAction} from 'redux';
import {types} from '../types/types';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

const CombineDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    secondary: '#2d2d2d',
    primary: '#576e8a',
    accent: '#112b43',
    disabled: 'rgba(255, 255, 255, 0.1)',
    backdrop: 'white',
    // background: 'rgba(205,205,205,.7)',
  },
};
const CombineDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    accent: '#576e8a',
    background: 'black',
    primary: '#112b43',
    text: 'white',
    backdrop: '#576e8a',
    disabled: 'rgba(0, 0, 0, 0.1)',
  },
};
export const UiReducer = (state :any = CombineDefaultTheme, action: ThemeAction) => {
  //  console.log(action.payload)
   switch (action.type) {
     case 'set_light_theme':
       return {...CombineDefaultTheme};

     case 'set_dark_theme':
       return {...CombineDarkTheme};

     default:
       return state;
   }
};
