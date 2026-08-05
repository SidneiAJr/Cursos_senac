import { StyleSheet, Text, Pressable,Image } from 'react-native';
import React from 'react';

const Botao = () => {
  return (
    <Pressable 
      style={styles.botao}
      onPress={() => alert('Seguindo...')}
    >
      <Text style={styles.texto}>Seguir</Text>
      <Image
              source={{ uri: 'https://img.icons8.com/ios/50/add-user-male.png' }}
              style={styles.foto}
              resizeMode="contain"
            />
    </Pressable>
  );
};

export default Botao;

const styles = StyleSheet.create({
  botao: {
    width: 200,
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',

    // sombra Android
    elevation: 10,

    // sombra iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  foto:{
    width: 20,
    height: 20
  }
});