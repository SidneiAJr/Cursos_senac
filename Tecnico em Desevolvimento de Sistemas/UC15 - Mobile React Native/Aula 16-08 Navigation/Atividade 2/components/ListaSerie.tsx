import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Lista } from '../hooks/Components'
import axios from 'axios'

const ListaSerie = ({tamanho,data,keyExtractor,renderItem,horizontal,onEndReached}:Lista) => {

   const [filmes, setFilmes] = useState<any[]>([])
   const [busca,setbusca]=useState('')

   const filtrados = filmes?.filter((item: any) =>item.name.includes(busca.toLowerCase())

   )
    useEffect(()=>{
        axios.get('https://api.tvmaze.com/shows')
        .then(resposta=>{
           setFilmes(resposta.data)
        })
},[])

  return (
    <View>
      <FlatList
        data={filtrados}                
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal={horizontal}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

export default ListaSerie

const styles = StyleSheet.create({})