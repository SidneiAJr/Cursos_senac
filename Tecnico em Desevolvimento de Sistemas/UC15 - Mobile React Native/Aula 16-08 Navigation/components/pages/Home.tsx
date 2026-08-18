import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Fundo from '../Fundo'

const Home = ({ navigation }: any) => {
  return (
     <Fundo img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccyseLL40mG8nZ_jfrbeW_m07v9aKjEC68jn6TS9q82KdeFMMY7ldsc4W&s=10">
    <View style={styles.container}>
         <View style={styles.botoes}>
      <Text style={styles.titulo}>Tela Inicial | Bem vindo</Text>
       <TouchableOpacity style={styles.botao}onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotao}>Tela 1 | Paginas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotao}>Tela 2 | Paginas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotao}>Tela 3 | Paginas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotao}>Tela 4 | Paginas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.voltar}onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
        </View>
    </View>
    </Fundo>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 25
  },

  titulo: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  voltar:{
    width: '45%',
    height: 90,
    borderRadius: 20,
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  botao: {
    width: '45%',
    height: 90,
    borderRadius: 20,
    backgroundColor: 'black',
    margin: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
})