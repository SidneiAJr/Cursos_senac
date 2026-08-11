import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';


const Fundo = ({ children }:any) => {
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePIdxKu825TGRNKUIVwtabzQOWfVhzQ6jlczkJSp0J_Se9qP_Udmq3lc&s=10' }}
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