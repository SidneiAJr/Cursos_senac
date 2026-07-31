import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ImagemPequena from './imgpequena'

const planetas = [
  {
    id: '1',
    nome: 'Mercúrio',
    cor: '#A6A6A6',
    distancia: '57,9 milhões km'
  },
  {
    id: '2',
    nome: 'Vênus',
    cor: '#E3BB76',
    distancia: '108,2 milhões km'
  },
  {
    id: '3',
    nome: 'Terra',
    cor: '#2E86C1',
    distancia: '149,6 milhões km'
  },
  {
    id: '4',
    nome: 'Marte',
    cor: '#C0392B',
    distancia: '227,9 milhões km'
  },
  {
    id: '5',
    nome: 'Júpiter',
    cor: '#D4AC6E',
    distancia: '778,5 milhões km'
  },
  {
    id: '6',
    nome: 'Saturno',
    cor: '#F4D03F',
    distancia: '1,4 bilhão km'
  },
  {
    id: '7',
    nome: 'Urano',
    cor: '#76D7C4',
    distancia: '2,9 bilhões km'
  },
  {
    id: '8',
    nome: 'Netuno',
    cor: '#2874A6',
    distancia: '4,5 bilhões km'
  },
];

const caixaPlanetas = () => {
  return (
    <View style={styles.caixa}>
    <Text style={styles.titulo}>Lista de Planetas</Text>
     <Text>=============================================</Text>
    <FlatList
      data={planetas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <ImagemPequena/>
          <Text style={styles.planeta}>Nome:{item.nome}</Text>
          <Text style={styles.planeta}>Distancia{item.distancia}</Text>
          <Text>=============================================</Text>
        </View>
        
      )}
    />
    </View>
  )
}

export default caixaPlanetas

const styles = StyleSheet.create({
    titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 15
  },
     planeta: {
    fontSize: 15,
    color: 'white',
    padding: 10,
  },
  caixa:{
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    width: 350,
    height: 300,
    borderRadius: 30,
    elevation: 25,
  },
  planeta2:{
    fontSize: 30,
    color: 'white',
    padding: 10,
  }
})