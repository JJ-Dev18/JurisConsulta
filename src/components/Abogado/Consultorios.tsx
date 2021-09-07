import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export const Consultorios = () => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <View style={styles.container}>
        <Text>No se encontraron Consultorios</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: 200,
    padding: 20,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
