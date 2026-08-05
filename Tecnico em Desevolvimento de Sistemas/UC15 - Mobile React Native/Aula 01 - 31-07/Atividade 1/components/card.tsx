import { StyleSheet, View } from 'react-native';
import React from 'react';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 430,
    height: 650,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
});