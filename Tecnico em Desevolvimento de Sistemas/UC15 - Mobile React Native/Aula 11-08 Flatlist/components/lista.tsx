import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { listaUniversal } from '../hooks/components'

const lista =<T=any> ({dados,renderItem,keyExtractor,horizontal,numColumns,separador,vazio,estilo}:listaUniversal <T>) => {
  return (
    <FlatList
            data={dados}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={keyExtractor || ((item: any, index) => String(item.id || index))}
            horizontal={horizontal}
            numColumns={numColumns}
            ItemSeparatorComponent={separador}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.lista, estilo]}
            key={numColumns}
        />
  )
}

export default lista

const styles = StyleSheet.create({
    lista:{}
})