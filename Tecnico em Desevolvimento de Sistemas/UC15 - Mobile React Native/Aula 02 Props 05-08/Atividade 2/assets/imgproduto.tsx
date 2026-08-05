import { StyleSheet, Image } from 'react-native';
import React from 'react';

interface urlImg{
   endereco:string
}

const ImgProduto = ({endereco}:urlImg) => {
  return (
    <Image
      source={{ uri: endereco}}
      style={styles.foto}
      resizeMode="cover"
    />
  );
};

export default ImgProduto;

const styles = StyleSheet.create({
  foto: {
    width: 210,
    height: 210,
    borderRadius: 100,
    margin: 10,
    elevation: 20
  },
});