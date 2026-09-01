// imgfundo.js
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function ImgFundo({ 
  children, 
  colors = ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
  style = {} // Valor padrão
}) {
  return (
    <ImageBackground
      style={[styles.background, style]}
      resizeMode="cover"
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {children}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  }
});