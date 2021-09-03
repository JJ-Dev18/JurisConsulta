import React from 'react'
import { ProgressBarAndroidBase } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Surface, Paragraph, Card, Button, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Ayuda = () => {
  const {colors }= useTheme()
  return (
    <View style={{...styles.content,backgroundColor:colors.background}}>
      <Surface style={{...styles.surfaceTitle,backgroundColor:colors.backdrop}}>
        <Text>Recursos JurisConsulta</Text>
        <Paragraph>
          Todo lo que usted necesita saber para tener el potencial de
          Jurisconsulta a sus manos
        </Paragraph>
      </Surface>
      <View style={styles.contentCards}>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Que es JurisConsulta</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={{height: '100%'}}
          />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Tutoriales</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={{height: '100%'}}
          />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Preguntas Frecuentes</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={{height: '100%'}}
          />
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Blog</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={{height: '100%'}}
          />
        </Card>
      </View>
      <View>
        <Button mode="contained">Escribenos</Button>
        <Button mode="contained" style={{marginTop: 20}}>
          <Icon name="whatsapp" /> Contactanos por wsp
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    content:{
    alignItems:'center',
    flex:1,
    padding:20,
    justifyContent: 'space-around'
    },
    surfaceTitle: {
     width:'90%',
     height:140,
     padding:20,
     alignItems:'center'
    },
    contentCards:{
    
    alignItems:'center',
    justifyContent:'space-around',
    flexWrap:'wrap',
    flexDirection: 'row',
    height:400
    
    },
    card:{
    width:180,
    height:100,
    marginTop:50
    }


});