import { StyleSheet, Text, View,TouchableOpacity, Image,TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CHAVE_FOTO = '@app:foto_perfil'
const CHAVE_NOME = '@app:nome';

export default function salvarImg() {
  const [foto, setFoto] = useState<string | null>(null)
  const [nome,setNome]=useState<string>('')

   useEffect(() => {
    const carregar = async () => {
      const salva = await AsyncStorage.getItem(CHAVE_FOTO)
      const nomeSalvo = await AsyncStorage.getItem(CHAVE_NOME);
      if (salva) setFoto(salva)
         if (nomeSalvo) {
        setNome(nomeSalvo);
      }
    }
    carregar()
  }, [])

  const escolherFoto = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.8,
    })
    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri
      setFoto(uri)
      await AsyncStorage.setItem(CHAVE_FOTO, uri)
    }

  }
  const salvar = async ()=>{
        await AsyncStorage.setItem('nome',nome)
        console.log(`Nome Salvo ${nome}`)
    }
  return (
   <View style={styles.container}>
      {foto ? (
        <Image source={{ uri: foto }} style={styles.foto} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <TouchableOpacity style={styles.botao} onPress={escolherFoto}>
        <Text style={styles.botaoTexto}>Trocar foto</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {alignItems: 'center', gap: 14,display:'flex',justifyContent:"center" },
  foto: { width: 120, height: 120, borderRadius: 60 },
  placeholder: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#eee' },
  botao: { backgroundColor: '#4ade9e', padding: 10, borderRadius: 10 },
  botaoTexto: { fontWeight: 'bold' },
})