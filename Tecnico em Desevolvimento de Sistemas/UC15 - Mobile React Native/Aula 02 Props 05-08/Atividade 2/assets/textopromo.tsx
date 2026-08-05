import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const TextoPromo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios/50/ticket--v1.png' }}
        style={styles.foto}
      />
      <Text style={styles.texto}>Promoção</Text>
    </View>
  );
};

export default TextoPromo;

const styles = StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'red',
  borderRadius: 5,
  paddingHorizontal: 8,
  paddingVertical: 5,
  margin: 5,
  elevation: 5
},
  texto: {
    color: 'white',
    fontWeight: '900',
    fontSize: 10,
    marginLeft: 6,
  },
  foto: {
    width: 20,
    height: 20,
  },
});