import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import ImgFundo from './imgfundo';

const LeftContent = (props) => <Avatar.Icon {...props} icon="shopping" />;

// ADICIONEI ID AQUI
const lista = [
  { id: '1', nome: 'Produto1', preco: 200, descricao: 'Produto 1' },
  { id: '2', nome: 'Produto2', preco: 2000, descricao: 'Produto 2' },
  { id: '3', nome: 'Produto3', preco: 250, descricao: 'Produto 3' },
  { id: '4', nome: 'Produto4', preco: 200, descricao: 'Produto 4' },
  { id: '5', nome: 'Produto5', preco: 2000, descricao: 'Produto 5' },
  { id: '6', nome: 'Produto6', preco: 20000, descricao: 'Produto 6' },
  { id: '7', nome: 'Produto7', preco: 200000, descricao: 'Produto 7' },
];

export default function App() {
  const [busca, setBusca] = useState('');

  const produtosFiltrados = lista.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.nome}
        subtitle={`R$ ${item.preco}`}
        left={LeftContent}
        titleStyle={styles.texto}
        subtitleStyle={styles.subTexto}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={styles.descricao}>{item.descricao}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/300' }} />
      <Card.Actions>
        <Button labelStyle={styles.botaoTexto}>Limpar</Button>
        <Button labelStyle={styles.botaoTexto}>Comprar</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <ImgFundo
      colors={['rgba(4, 4, 189, 0.8)', 'rgba(51, 7, 7, 0.8)', 'rgba(204, 96, 33, 0.8)', 'rgba(223, 222, 222, 0.8)']}
    >
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Buscar produto"
          value={busca}
          onChangeText={setBusca}
          style={styles.searchInput}
          left={<TextInput.Icon icon="magnify" />}
          textColor="#fff"
          outlineColor="#fff"
          activeOutlineColor="#00bfff"
        />

        <FlatList
          data={produtosFiltrados}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImgFundo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  card: {
    elevation: 20,
    margin: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    borderRadius: 12,
  },
  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900'
  },
  subTexto: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900'
  },
  descricao: {
    color: '#E0E0E0',
    fontSize: 14,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchInput: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
  },
  list: {
    paddingBottom: 16,
  }
});