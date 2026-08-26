import { StyleSheet, Text, View,TextInput,TouchableOpacity,Switch } from 'react-native'
import React, { useState } from 'react'
import SalvarImg from './salvarImg'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function telaPerfil() {
    const [senha,setSenha] = useState<string[]>([])
    const [email,setEmail] = useState<string[]>([])
    const [nome,setNome] = useState<string[]>([])
    const [escuro, setEscuro] = useState(false);
    const [texto, settexto] = useState(false);
    const [final, setFinal] = useState('');

    const fundo = async ()=> {
    setEscuro(!escuro);
    settexto(!texto)
  };

  const salvar = async ()=>{
     const novoValor = !escuro 
     await AsyncStorage.setItem('escuro', novoValor ? 'true' : 'false');
     setFinal('Salvo com sucesso!');
  }


  return (
    <View  style={[styles.container,{backgroundColor: escuro ? '#121212' : '#ffffff',}]}>
     <Text style={[styles.text,{color: escuro ? 'white' : 'black',}]}>Bem vindo | Tela Perfil</Text>
      <Switch
  value={escuro}
  onValueChange={setEscuro}
/>
      <SalvarImg/>
      <TextInput style={[styles.input, {backgroundColor: texto? '#ffffff' :'grey',}]} placeholder='Insira seu Nome' value={nome} onChangeText={setNome}/>
      <TextInput style={[styles.input, {backgroundColor: texto? '#ffffff' :'grey',}]} placeholder='Insira seu Email' value={email} onChangeText={setEmail}/>
      <TextInput style={[styles.input, {backgroundColor: texto? '#ffffff' :'grey',}]} placeholder='Insira seu senha' value={senha} onChangeText={setSenha}/>
       <TouchableOpacity style={styles.botao} onPress={fundo}>
        <Text style={styles.textoBotao}>Trocar Fundo</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
        <Text style={[styles.salvo,{color: escuro ? 'white' : 'black',}]}>{final}</Text>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 38,
        fontWeight: 900,
        color: 'black'
    },
    input:{
        borderRadius: 20,
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5
    },
    botao: {
    width: '80%',
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  salvo:{
    color: 'black',
    fontSize: 20,
    fontWeight: 900,
  },
  troca:{
     color: 'black',
  }
})