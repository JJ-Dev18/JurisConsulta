import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ButtonVideo = () => (
  <FAB
    style={styles.fab}
    
    icon={({size, color}) => (<Icon name="video" color={color} size={20} />)}
  
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default ButtonVideo;
