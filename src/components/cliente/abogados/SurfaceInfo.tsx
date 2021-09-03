import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { Surface, Title, useTheme } from 'react-native-paper';

interface Props{
  title:string,
  text:string
}
export const SurfaceInfo = ({title,text}:Props) => {
  const {colors} = useTheme()
  return (
    <Surface style={{...styles.surface, borderColor: colors.accent,borderWidth:1}}>
      <Title style={{...styles.title, color: colors.primary}}>{title} </Title>
      <Text> {text} </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    
    left: 0,
  },
  surface: {
    height: 40,
    // backgroundColor: 'gray',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
});