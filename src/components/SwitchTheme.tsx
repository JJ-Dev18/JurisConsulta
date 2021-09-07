import React,{useEffect} from 'react'
import { View, useColorScheme } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';



interface Props {
  setLigth:()=> void ,
  setDark: () => void;
}
export const SwitchTheme = ({setLigth,setDark}:Props) => {
  const { colors } = useTheme()
  const schema= useColorScheme()
  const theme = useSelector((state: RootState) => state.Ui);

  //  const [isTheme, setIsTheme] = React.useState(theme.dark);
   const onToggleSwitchTheme = () => {
    //  setIsTheme(!isTheme);
     theme.dark ? setLigth() : setDark();
   };
  //  useEffect(() => {
  //    if(schema=='dark'){
  //      setIsTheme(true)
  //    }
  //  }, [schema])

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 17}}>
      <Icon
        name={theme.dark ? 'sun' : 'moon'}
        color={theme.dark ? 'white' : 'black'}
        size={25}
      />
      <Switch
        value={theme.dark}
        onValueChange={onToggleSwitchTheme}
        color={colors.primary}
        style={{width: 40, marginLeft: 10}}
        trackColor={{true: 'white', false: 'black'}}
      />
    </View>
  );
}
