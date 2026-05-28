import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Botao = () => {
  return (
    <View style= {styles.botao}>
     <Button title='Clique'></Button>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao:{
        width: 200,
        height: 50,
        backgroundColor: 'yellow',
        borderRadius : 30,
        display: 'flex',
        textAlign: 'center',
        alignItems :'center',
        color: 'white'
    }
})
