import { FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ListaGrande() {
    const dados = [
  { id: '1', nome: 'Maria' },
  { id: '2', nome: 'João' },
  { id: '3', nome: 'Ana' },
];
  return (
   <FlatList 
    data={dados}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.nome}</Text>} 
  />
   
  )
}

const styles = StyleSheet.create({})
