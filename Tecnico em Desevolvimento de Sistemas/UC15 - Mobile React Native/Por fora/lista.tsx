import { StyleSheet, Text, View, FlatList,TextInput } from 'react-native'
import React, { useState } from 'react'

const contato = [
    {id: '1',nome: 'vapo jr', telefone:'5199999999999'},
    {id: '2',nome: 'vapo silva', telefone:'5199999999999'},
    {id: '3',nome: 'vapo x', telefone:'5199999999999'}
]


const lista = () => {
    const [busca,setBusca] = useState('')
    const filtro = contato.filter(item=>
        item.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
    )
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Buscar contato..."
        value={busca}
        onChangeText={setBusca}
      />
     <FlatList
        data={filtro}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.tel}>{item.telefone}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default lista

const styles = StyleSheet.create({
     container: { flex: 1, padding: 20, backgroundColor: '#fff',marginTop:50 },
     card: { padding: 16, marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
     nome: { fontSize: 30, fontWeight: 'bold' },
    tel: { fontSize: 14, color: '#666' },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 16, fontSize: 16 },
})