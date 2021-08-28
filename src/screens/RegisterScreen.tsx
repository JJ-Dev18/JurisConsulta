import React, {useState, useEffect} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import RegisterForm from '../components/login/RegisterForm';

// interface Props {
//   params :{
//     abogado : boolean
//   }
// }
interface Props extends StackScreenProps<any, any> {}
export const RegisterScreen = ({route,navigation}:Props) => {
  const [loading, setloading] = useState(false);
  const {width, height} = useWindowDimensions();
  const params = route.params
  // console.log(navigation)
  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 2000);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      {!params?.abogado ? (
        <RegisterForm
          textButton="Registrarse"
          navigation={navigation}
          route={route}
          
        />
      ) : (
        <RegisterForm
          textButton="Registrarse como abogado"
          navigation={navigation}
          route={route}
        />
      )}
    </View>
  );
};
