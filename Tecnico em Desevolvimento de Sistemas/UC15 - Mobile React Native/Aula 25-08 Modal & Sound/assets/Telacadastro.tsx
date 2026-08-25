import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImgGaleria from './foto'
import Texto from './texto'

const Telacadastro = () => {
  return (
    <View style={styles.container}>
      <Texto/>
      <ImgGaleria/>
    </View>
  )
}

export default Telacadastro

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})