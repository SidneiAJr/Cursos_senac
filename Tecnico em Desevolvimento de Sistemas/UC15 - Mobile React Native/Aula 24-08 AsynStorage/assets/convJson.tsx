import { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CHAVE_FAVORITOS = '@app:favoritos'

export default function convJson() {
    const [favoritos, setFavoritos] = useState<string[]>([])

     useEffect(() => {
    const carregar = async () => {
      const salvos = await AsyncStorage.getItem(CHAVE_FAVORITOS)
      if (salvos) setFavoritos(JSON.parse(salvos))
    }
    carregar()
  }, [])

  const adicionarFavorito = async (produto: string) => {
    const atualizados = [...favoritos, produto]
    setFavoritos(atualizados)
    await AsyncStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(atualizados))
  }
  return (
    <FlatList
      data={favoritos}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  )
}

const styles = StyleSheet.create({})