// TelaLista.tsx
import { StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';
import Lista from '../lista';
import TelaRelogoio from '../Relogoio';
import InputRe from '../inputRe';
import Logo from '../logo';

const usuarios = [
  {
    id: 1,
    nome: 'Pneu de Carrinho de Mão Esportivo',
    preco: 49,
    imagem: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
  },
  {
    id: 2,
    nome: 'Cadeira Gamer de Plástico Monobloco',
    preco: 12,
    imagem: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
  },
  {
    id: 3,
    nome: 'Controle Remoto Sem Pilha',
    preco: 89,
    imagem: 'https://images.unsplash.com/photo-1609592424821-3c7b4f8c7b6a',
  },
  {
    id: 4,
    nome: 'Chinelo Tamanho 43 - Pé Esquerdo',
    preco: 7,
    imagem: 'https://images.unsplash.com/photo-1603487742131-4160ec999306',
  },
  {
    id: 5,
    nome: 'Água Mineral Gourmet - Sem Gás',
    preco: 999,
    imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d',
  },
  {
    id: 6,
    nome: 'Batata Misteriosa',
    preco: 3,
    imagem: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
  },
  {
    id: 7,
    nome: 'Tijolo Premium Edition',
    preco: 420,
    imagem: 'https://images.unsplash.com/photo-1599696848652-f0a2d2a4f8b7',
  },
  {
    id: 8,
    nome: 'Mouse Gamer Para Jogar Paciência',
    preco: 199,
    imagem: 'https://images.unsplash.com/photo-1527814050087-3793815479db',
  },
  {
    id: 9,
    nome: 'Pote de Sorvete Vazio',
    preco: 1,
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b',
  },
  {
    id: 10,
    nome: 'Cabo USB que Só Funciona de Um Lado',
    preco: 69,
    imagem: 'https://images.unsplash.com/photo-1625842268584-8f3296236761',
  },
  {
    id: 11,
    nome: 'Relógio Adiantado 7 Minutos',
    preco: 35,
    imagem: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
  },
  {
    id: 12,
    nome: 'Air Fryer Para Aquecer Água',
    preco: 666,
    imagem: 'https://images.unsplash.com/photo-1585515320310-259814833e62',
  },
  {
    id: 13,
    nome: 'Pedra Decorativa de Jardim - Edição Limitada',
    preco: 150,
    imagem: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
  },
  {
    id: 14,
    nome: 'Meia Sem Par - Coleção Inverno',
    preco: 18,
    imagem: 'https://images.unsplash.com/photo-1582966772680-860e372bb558',
  },
  {
    id: 15,
    nome: 'Caneta Bic Que Já Não Tem Tinta',
    preco: 9999,
    imagem: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd',
  },
  {
    id: 16,
    nome: 'Placa "Não Aperte o Botão"',
    preco: 20,
    imagem: 'https://images.unsplash.com/photo-1493612276216-ee3925520721',
  },
  {
    id: 17,
    nome: 'Pacote com 1 Parafuso e Muita Esperança',
    preco: 2,
    imagem: 'https://images.unsplash.com/photo-1504148455328-c376907d081c',
  },
  {
    id: 18,
    nome: 'Pão Francês de Segunda-feira',
    preco: 4,
    imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
  },
  {
    id: 19,
    nome: 'Notebook Gamer Sem Notebook',
    preco: 4999,
    imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
  },
  {
    id: 20,
    nome: 'Vale Nada - Produto Esgotado',
    preco: 0,
    imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  },
];

const TelaLista = () => {
    const [busca, setBusca] = useState('');

  const usuariosFiltrados = usuarios.filter(item =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const renderizarItem = (item: typeof usuarios[0], index: number) => (
    <View style={styles.item}>
    <Image 
        source={{ uri: item.imagem }} 
        style={styles.imagem}
      />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>💵R$ {item.preco},00</Text>
      </View>
      <View style={styles.box}>
        <Logo width={25} height={25} url='https://img.icons8.com/ios/50/shopping-cart--v1.png' resizeMode='cover'/>
        <Logo width={25} height={25} url='https://img.icons8.com/material-outlined/24/broom.png' resizeMode='cover'/>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <TelaRelogoio alinhamento='center' tamanho={20} color='black' peso='900' borderRadius={25}/>
        <InputRe largura={400} altura={50} cor='black' texto='Procurar' bordaCor='black' bordaEspessura={2} bordaRedonda={5} onChangeText={setBusca} value={busca} />
        <Text style={styles.Texto}>Itens | Venda</Text>
        <Lista 
        dados={usuariosFiltrados}
        renderItem={renderizarItem} 
        keyExtractor={(item) => String(item.id)}
        horizontal={false}
        numColumns={1}
        separador={() => <View style={{height: 10}} />}
        vazio={() => <Text>Nada aqui!</Text>}
        estilo={styles.lista}
      />
    </View>
  );
};
export default TelaLista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  nome: {
    fontSize: 20,
    fontWeight: 900
  },
  id: {
    fontSize: 12,
    color: '#666',
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  Texto:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 900
  },
  preco:{
    fontSize: 20,
    fontWeight:900
  },
  box:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  },
  lista:{
    flex: 1,
  backgroundColor: '#f5f5f5',
  }
});