import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Listaapi from '../listaapi'

const TelaAPi = () => {
  return (
    <View style={styles.container}>
     <Listaapi/>
    </View>
  )
}

export default TelaAPi

const styles = StyleSheet.create({
    container: { flex: 1}
})