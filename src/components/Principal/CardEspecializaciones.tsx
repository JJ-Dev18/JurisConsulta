import React from 'react'
import { View, Text } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, useTheme } from 'react-native-paper';

export const CardEspecializaciones = () => {
const {colors} = useTheme();
  const LeftContent = 
  (props:any) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <View >
      <Card onPress={() =>console.log('abrir ')}>
       
        <Card.Cover
          source={{
            uri: 'https://teoriadelderecho.com/wp-content/uploads/2019/07/conceptos-importantes-del-Derecho-Civil.jpg',
          }}
        />
      </Card>
      <Text style={{fontWeight: 'bold', elevation: 33, textAlign: 'center',color: colors.primary}}>
        {' '}
        Laboral{' '}
      </Text>
    </View>
  );
}
