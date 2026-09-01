import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import ImgFundo from './imgfundo';

const LeftContent = (props) => <Avatar.Icon {...props} icon="shopping" />;

const lista = [
  {
    id: '1',
    nome: 'Produto1',
    preco: 200,
    descricao: 'Produto 1',
    imagem: 'https://super.abril.com.br/wp-content/uploads/2003/08/everest.jpg?crop=1&resize=1212,909',
  },
  {
    id: '2',
    nome: 'Produto2',
    preco: 2000,
    descricao: 'Produto 2',
    imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5723fab70e21634575011f03qr-635-gb-01-eps.jpeg?quality=70&strip=all&strip=all',
  },
  {
    id: '3',
    nome: 'Produto3',
    preco: 250,
    descricao: 'Produto 3',
    imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/57c7621c0e2163719706709eopala_01-psd.jpeg?quality=70&strip=all&strip=all',
  },
  {
    id: '4',
    nome: 'Produto4',
    preco: 200,
    descricao: 'Produto 4',
    imagem: 'https://s2-autoesporte.glbimg.com/9Q1J2vdLHYloHXL_B4GWv74jaeM=/0x0:620x413/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/D/H/x6ZIJIT2KwZABkJrFyFA/2016-08-19-monza08.jpg',
  },
  {
    id: '5',
    nome: 'Produto5',
    preco: 2000,
    descricao: 'Produto 5',
    imagem: 'https://cdn.motor1.com/images/mgl/e3VwM/s1/justica-brasileira-processa-gm-por-omissao-de-recall-do-vectra-em-1998.jpg',
  },
  {
    id: '6',
    nome: 'Produto6',
    preco: 20000,
    descricao: 'Produto 6',
    imagem: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=257,fit=crop/A3Q2pPVOoRUNv05q/chatgpt-image-26_09_2025-13_47_45-mePgnxjE6pcKX5Rj.png',
  },
  {
    id: '7',
    nome: 'Planeta | Venus',
    preco: 2,
    descricao: 'Defeito Precisa Terraformar',
    imagem: 'https://content.nationalgeographic.pt/medio/2024/02/28/planeta-venus_cab4dd46_240228170348_1280x1280.jpg',
  },
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
     <Card.Cover source={{ uri: item.imagem }} />
      <Card.Actions>
        <Button labelStyle={styles.botaoTexto}>Limpar</Button>
        <Button labelStyle={styles.botaoTexto}>Comprar</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <ImgFundo
      colors={['rgba(4, 4, 189, 0.8)', 'rgba(51, 7, 7, 0.8)', 'rgba(0, 0, 0, 0.8)', 'rgba(100, 17, 17, 0.8)']}
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
