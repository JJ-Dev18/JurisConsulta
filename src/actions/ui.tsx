import {types} from '../types/types'


export const setThemeApp =() => ({
  type: types.theme
})

 export const setDarkTheme = () => ({
   type: 'set_dark_theme'
 });

 export const setLightTheme = () => ({
   type: 'set_light_theme'
  
 });
