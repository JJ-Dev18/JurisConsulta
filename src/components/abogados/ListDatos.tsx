import * as React from 'react';
import { List, useTheme } from 'react-native-paper';
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListDatos = () => {
  const [expanded, setExpanded] = React.useState(true);
  
  const {colors} = useTheme()
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Section
        title="Datos personales"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item
          title="Genero"
          right={({color, style}) => <Text>Femenino </Text>}
        />
        <List.Item
          title="Pais"
          right={({color, style}) => <Text>Colombia </Text>}
        />
        <List.Item
          title="Colombia"
          right={({color, style}) => <Text>Ibague </Text>}
        />
      </List.Section>
      <List.Section
        title="Idiomas"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item title="Espanol" />
      </List.Section>
      <List.Section
        title="Especialidad"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item title="Laboral" />
      </List.Section>
      <List.Section
        title="Universidades"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item title="SENA" />
        <List.Item title="UNIVERSIDAD DEL TOLIMA " />
        <List.Item title="DIGITAL HOUSE" />
      </List.Section>
      <List.Section
        title="Membresias"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item title="SENA" />
      </List.Section>
      <List.Section
        title="Biografia"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item title="Soy el mejor" />
      </List.Section>
      <List.Section
        title="Calificaciones"
        titleStyle={{backgroundColor: colors.primary, color: 'white'}}>
        <List.Item title="SENA" />
        <List.Item title="UNIVERSIDAD DEL TOLIMA " />
        <List.Item title="DIGITAL HOUSE" />
      </List.Section>
    </List.Section>
  );
};

export default ListDatos;
