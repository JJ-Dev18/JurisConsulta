import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Surface, Paragraph, Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Ayuda = () => {
  return (
    <View style={styles.content}>
      <Surface style={styles.surfaceTitle}>
        <Text>Recursos JurisConsulta</Text>
        <Paragraph>
          Todo lo que usted necesita saber para tener el potencial de
          Jurisconsulta a sus manos
        </Paragraph>
      </Surface>
      <View style={styles.contentCards}>
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
      </View>
      <View>
        <Button>Escribenos</Button>
        <Button><Icon name='wsp'/> Contactanos por wsp</Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    content:{

    },
    surfaceTitle: {

    },
    contentCards:{

    },
    card:{

    }


});