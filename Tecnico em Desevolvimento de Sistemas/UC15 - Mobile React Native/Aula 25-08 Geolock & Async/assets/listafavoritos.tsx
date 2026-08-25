import { StyleSheet, Text, View,TextInput,FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CHAVE_FAVORITOS = '@armazenamento:favoritos'

export default function listafavoritos() {
    const [favoritos,setfavoritos] = useState<string[]>([])
    const [produto,setproduto] = useState<string>('')
     
   useEffect(() => {
  const carregador = async () => {
    const salvos = await AsyncStorage.getItem(CHAVE_FAVORITOS)

    if (salvos) {
      const dados = JSON.parse(salvos)

      if (Array.isArray(dados)) {
        setfavoritos(dados)
      }
    }
  }

  carregador()
}, [])

    const removerindice = async(item:string)=>{
        const novalista = favoritos.filter((i)=>i!==item) 
        setfavoritos(novalista)
        await AsyncStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(novalista))
    }

    const removertudo = async()=>{
        setfavoritos([])
        await AsyncStorage.removeItem(CHAVE_FAVORITOS)
        
    }


const adicionar = async (produto: string) => {
  const atualizar = [...favoritos, produto]

  setfavoritos(atualizar)

  await AsyncStorage.setItem(
    CHAVE_FAVORITOS,
    JSON.stringify(atualizar)
  )
}
  return (
   <View style={styles.container}>
   <TextInput placeholder='Insira um produto' onChangeText={setproduto} value={produto} style={styles.input}/>
   <TouchableOpacity onPress={()=>adicionar(produto)} style={styles.botao}>
     <Text>Favoritorar</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={removertudo} style={[styles.botao, {backgroundColor: 'red'}]}>
                <Text style={{color: 'white'}}>REMOVER TODOS</Text>
            </TouchableOpacity>

   <Text style={{ marginBottom: 10 }}>
                Total de itens: {favoritos.length}
            </Text>
   <FlatList
  data={favoritos}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item}</Text>

      <TouchableOpacity onPress={() => removerindice(item)}>
        <Text style={styles.remover}>✕</Text>
      </TouchableOpacity>
    </View>
  )}
  style={styles.lista}
/>
</View>
  )
}

const styles = StyleSheet.create({
   container:{
   flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
   },
    input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: 'lightblue',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },

  lista: {
    flex: 1,
  },
  texto: {
  color: '#0000FF',
  fontSize: 25,
  fontWeight: '900',
  textShadowColor: '#FF0000',
  textShadowOffset: { width: 3, height: 3 },
  textShadowRadius: 0,
},
})