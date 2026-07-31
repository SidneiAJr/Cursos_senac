import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const Fundo = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwRHgONzy5Kh1V3_3wUTn9dPqNww-egjEpuauzyjm2b5mXuDDaQNh8dYK&s=10'
      }}
      style={styles.foto}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default Fundo;

const styles = StyleSheet.create({
  foto: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});