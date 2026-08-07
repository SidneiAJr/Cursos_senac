import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Listaapi from './listaApi'

const TelaApi = () => {
  return (
    <View style={styles.container}>
      <Listaapi/>
    </View>
  )
}

export default TelaApi

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})