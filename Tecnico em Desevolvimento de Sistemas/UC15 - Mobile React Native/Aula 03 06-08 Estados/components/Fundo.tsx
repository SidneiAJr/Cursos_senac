import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';


const Fundo = ({ children }:any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/1095.adapt_.1900.1.jpg?w=1900&h=1425' }}
      style={styles.fundo}
      resizeMode="cover"
    >
        { children }
    </ImageBackground>
  );
};

export default Fundo;

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});