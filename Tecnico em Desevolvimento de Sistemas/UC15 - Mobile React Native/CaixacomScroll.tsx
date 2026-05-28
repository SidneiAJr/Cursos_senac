import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CaixacomScroll = () => {
  return (
    <ScrollView style={styles.caixa}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Text>10</Text>
    </ScrollView>
  )
}

export default CaixacomScroll

const styles = StyleSheet.create({
    caixa:{
         color: 'white',
        backgroundColor: 'red',
        fontWeight: 'bold'
    }
})
