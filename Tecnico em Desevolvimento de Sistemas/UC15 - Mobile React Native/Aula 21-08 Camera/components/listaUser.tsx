import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ListaUser = () => {

   const [Usuarios,setUsuario] = useState([])
   const [usuariosC,setCarregado] = useState(true)
   const [busca,setbusca]=useState('')

   const filtrados = Usuarios.filter((item: any)=>item.name.includes(busca.toLowerCase()))

   useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resposta=>{
           setUsuario(resposta.data)
            setCarregado(false)
        })
        .catch(erro => { 
        console.error('Erro ao buscar usuários:', erro);
        setCarregado(false);
        })
   },[])

  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Lista</Text>
      <FlatList
    data={filtrados}
    keyExtractor={(item: any) => item.id.toString()}
    renderItem={({ item, index }: any) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    )}
/>
   </View>
  )
}

export default ListaUser

const styles = StyleSheet.create({
     container: { flex: 1, padding: 20, backgroundColor: '#fff', marginTop: 50 },
     Texto:{fontSize:35, fontWeight:900, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}
})