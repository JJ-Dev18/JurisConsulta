import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
interface Props  {
  title: string;
  img?:string,
}
const Tipo = ({title}:Props) => { 
  const  navigator  = useNavigation()
  return (
   
  <Card style={styles.card} mode="elevated"
   onPress={()=>{
     let abogado = false
    if (title === 'Abogado'){
      abogado = true
    }
      navigator.dispatch(
        CommonActions.navigate({
          name: 'Registrarse',
          params: {
            abogado
          },
        }),
      );
   }}
  >
   
    <Card.Content>
      <Title style={{textAlign : 'center'}}>{title}</Title>
      
    </Card.Content>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
   
  </Card>
)};

export default Tipo;

const styles = StyleSheet.create({
    card : {
      width: '80%'
    }
});