import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'

const venda = () => {
  const [titulo, setTitulo] = useState<string>('')
  const [enviando, setEnviando] = useState<boolean>(false)
  const [produto,setProdutos] = useState<string>('')
  

  const criarProduto = async () => {
    setEnviando(true)
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: titulo }),
      })
      const criado = await resposta.json()
      console.log('Criado com id:', criado.id)
      setTitulo('')
    } catch (erro) {
      console.log('Deu ruim ao criar:', erro)
    } finally {
      setEnviando(false)
    }
  }

  const salvarEdicao = async () => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: titulo }),
      })
      console.log('Produto atualizado!')
    } catch (erro) {
      console.log('Erro ao atualizar:', erro)
    }
  }

  const removerProduto = async (id: number) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
    setProdutos((atual) => atual.filter((p) => p.id !== id))
  } catch (erro) {
    console.log('Erro ao remover:', erro)
  }
}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Nome do produto"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={criarProduto}
        disabled={enviando}
      >
        <TouchableOpacity
        style={styles.botao}
        onPress={salvarEdicao}
        disabled={enviando}
      >
        <TouchableOpacity onPress={() => removerProduto(item.id)}>
       <Text style={styles.remover}>Excluir</Text>
     </TouchableOpacity>
     
      </TouchableOpacity>
        <Text style={styles.botaoTexto}>
          {enviando ? 'Enviando...' : 'Criar produto'}
        </Text>

        <Text style={styles.botaoTexto}>
          {enviando ? 'Editar...' : 'Editar'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default venda

const styles = StyleSheet.create({
    container: { gap: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10, alignItems: 'center' },
  botaoTexto: { fontWeight: 'bold' },
})