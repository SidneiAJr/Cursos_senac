// TelaLista.tsx
import { StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';
import Lista from '../lista';
import TelaRelogoio from '../Relogoio';
import InputRe from '../inputRe';

const usuarios = [
   {id: 1, nome: 'Tenis 1', preco: 100, imagem: 'https://images.tcdn.com.br/img/img_prod/1317970/tenis_olympikus_esportivo_dynamic_texturizado_masculino_preto_laranja_18243_1_27a5a6453ef9907c54ad943c860ef459.jpg'},
   {id: 2, nome: 'Tenis 2', preco: 100, imagem: 'https://images.tcdn.com.br/img/img_prod/311840/tenis_adidas_runfalcon_5_feminino_preto_e_branco_137089_1_1779264aa08965405d0909b6fb43ec8a.jpg'},
   {id: 3, nome: 'Montanha', preco: 10, imagem: 'https://123ecos.com.br/wp-content/uploads/2023/04/biomas-montanos.webp'},
   {id: 4, nome: 'Marea Turbo GLP 2.0 24v', preco: -10, imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5723fab70e21634575011f03qr-635-gb-01-eps.jpeg?quality=70&strip=all&strip=all'},
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
    </View>
  );

  return (
    <View style={styles.container}>
        <View>
        <InputRe largura={400} altura={50} cor='black' texto='Procurar' bordaCor='black' bordaEspessura={2} bordaRedonda={5} onChangeText={setBusca} value={busca} />
        <TelaRelogoio alinhamento='center' tamanho={20} color='black' peso='900' borderRadius={25}/>
         <Text style={styles.Texto}>Itens | Venda</Text>
        <Lista 
        dados={usuariosFiltrados}
        renderItem={renderizarItem} 
        keyExtractor={(item) => String(item.id)}
        horizontal={false}
        numColumns={0}
        separador={() => <View style={{height: 10}} />}
        vazio={() => <Text>Nada aqui!</Text>}
        estilo={{backgroundColor: '#f5f5f5'}}
      />
        </View>
    </View>
  );
};
export default TelaLista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    fontWeight: 'bold',
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
    fontSize: 45,
    fontWeight: 900
  },
  preco:{
    fontSize: 20,
  }
});