import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Botao = () => {
  return (
    <Pressable style={styles.botao}>
      <Text style={styles.textobotao} >Botão 1</Text>
    </Pressable>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao:{
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
         elevation: 25,
    },
    textobotao:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    }
})