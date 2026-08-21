import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';


const Fundo = ({ children }:any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1717153982802-b0bd0b2eb579?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
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