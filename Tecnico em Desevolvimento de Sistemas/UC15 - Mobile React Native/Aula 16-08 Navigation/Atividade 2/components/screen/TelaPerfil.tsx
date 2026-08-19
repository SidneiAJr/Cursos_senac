import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../logo'

const TelaPerfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fundo}>
       <Logo tamanho={100} uri='https://img.icons8.com/windows/32/administrator-male--v1.png'/>
      <Text style={styles.texto}>Perfil | Conta</Text>
       <Text style={styles.texto2}>Informações:</Text>
       <Text style={styles.texto3}>✉️Email:</Text>
       <Text style={styles.texto3}>📅 Conta criada em:</Text>
      <Text style={styles.texto3}>⚙️ Configurações da conta</Text>
       <Text style={styles.texto3}>🌙 Tema</Text>
      </View>
    </View>
  )
}

export default TelaPerfil

const styles = StyleSheet.create({
  fundo:{
   backgroundColor: 'rgba(211, 206, 206, 0.29)',
   borderRadius: 30
  },
  container:{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  texto:{
    marginTop:5,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 900,
    color: 'white'
  },
  texto2:{
    marginTop:2,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 900,
    color: 'white'
  },
  texto3:{
    marginTop:2,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 900,
    color: 'white'
  }
})