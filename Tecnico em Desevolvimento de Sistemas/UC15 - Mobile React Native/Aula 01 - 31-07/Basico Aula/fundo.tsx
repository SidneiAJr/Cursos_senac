import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Fundo = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/df/a3/16/dfa3162521f8ab86837db29e6dfe054d.gif',
      }}
      style={styles.fundo}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default Fundo;

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },
});