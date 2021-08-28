import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  NavigatorIOS,
} from 'react-native';
import {LoadingScreen} from '../components/login/LoadingScreen';
import LoginForm from '../components/login/LoginForm';
import {StackScreenProps} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ({navigation}: Props) => {
  const [loading, setloading] = useState(false);
  const {width, height} = useWindowDimensions();
  const navigator = useNavigation()
  
  useEffect(() => {
    navigator.setOptions({
      headerShown: false ,
    })
    setTimeout(() => {
      setloading(true);
    }, 2000);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      {!loading ? <LoadingScreen /> : <LoginForm  />}
    </View>
  );
};
