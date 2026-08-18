import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import ListaSerie from '../ListaSerie'
import ImagemSerie from '../ImagemSerie'
import BotaoComponente from '../botao'
import Logo from '../logo'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const TelaGeral = ({route,navigation}:any) => {
  const [filmes, setfilmes] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Logo uri="https://img.icons8.com/ios/ffffff/50/movie--v1.png" tamanho={50} />
      <Text style={styles.texto}>Series Gerais | Lista</Text>
      </View>
        <ListaSerie
        renderItem={({ item }) => (
  <View style={styles.card}>
    <ImagemSerie image={item.image} />
    <View style={styles.cardlado}>
      <Text style={styles.nome}>{item.name}</Text>
      <Text style={styles.genero}>{item.genres?.join(', ')}</Text>
      <Text style={styles.avalicao}>⭐ {item.rating?.average ?? 'N/A'}</Text>
      <Text style={styles.finalizado}>{item.status}</Text>
      <View style={styles.botoes}>
        <BotaoComponente tamanho={10} grossura={0}sombra={4}corFundo="#6200EE"titulo="Ver Mais"onPress={() => (navigation as any).navigate('TelaMais', { serie: item })}/>
        <BotaoComponente tamanho={10} grossura={0}sombra={4}corFundo="#29aa74"titulo="Favoritar"onPress={() => console.log('Favoritado...')}/>
      </View>
    </View>
  </View>
)}
      />
      </View>
  )
}

export default TelaGeral

const styles = StyleSheet.create({
  header:{
    marginTop: 25,
    gap: 0,
    padding: 3,
    flexDirection: 'column'
  },
  container:{
    flex: 1,
    backgroundColor: 'black'
  },
  finalizado:{
   color: 'black',
    fontSize: 12,
    fontWeight: 900,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  genero:{
   color: 'black',
    fontSize: 12,
    fontWeight: 900,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  avalicao:{
    color: 'black',
    fontSize:12,
    fontWeight: 900,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  finalizao:{
    color: 'black',
    fontSize: 13,
    fontWeight: 900,
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  texto:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 900,
    color: 'white'
  },
  card:{
  flexDirection: 'row',      // imagem e texto lado a lado
  marginHorizontal: 16,
  marginBottom: 8,
  borderRadius: 10,
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.42)',
  elevation: 1,
  shadowColor: '#000',
  shadowOpacity: 0.4,
  shadowRadius: 8,
},
cardlado:{
  flex: 1,                   // ocupa o espaço restante ao lado da imagem
  padding: 10,
  justifyContent: 'center',
},
  nome:{
    color: 'black',
    fontSize: 20,
    fontWeight: 900,
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  imagem: {
    width: '100%',   // corrige o erro de tipagem do RN
    height: 200,
  },
  botoes:{
    gap: 5,
    margin: 9
  }
})