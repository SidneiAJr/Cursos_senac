import { StyleSheet, View, ImageBackground } from 'react-native';
import React from 'react';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtmG6DepVLoEp5czkszdzHuwb_ShIqYuG0eki5VcPSh5jKyRx0Teec2lz&s=10'
        }}
        style={styles.fundo}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 600,
    width: 450,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});