import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';


const Fundo = ({ children }:any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/c2/a2/94/c2a294bf7bc34c5f854ec62cd0740df0.gif' }}
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