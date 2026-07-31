import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MenuCima = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.item}>Início</Text>
      <Text style={styles.item}>Informação</Text>
      <Text style={styles.item}>Teste</Text>
    </View>
  );
};

export default MenuCima;

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: 80,
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 20// pode ajustar conforme necessário
  },
  item: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});