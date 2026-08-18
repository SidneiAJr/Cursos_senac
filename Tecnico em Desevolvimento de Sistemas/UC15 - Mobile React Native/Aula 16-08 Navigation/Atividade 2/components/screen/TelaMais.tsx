import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ImgGrande from '../imgGrande'
import BotaoComponente from '../botao'

const TelaMais = ({ navigation,route }: any) => {
  const { serie } = route.params

  return (
    <ScrollView style={styles.container}>
      <ImgGrande uri={serie.image?.original} altura={500} />
      <View style={styles.info}>
        <Text style={styles.nome}>{serie.name}</Text>
        <Text style={styles.genero}>{serie.genres?.join(', ')}</Text>
        <Text style={styles.avalicao}>⭐ {serie.rating?.average ?? 'N/A'}</Text>
        <Text style={styles.finalizado}>{serie.status}</Text>
        <Text style={styles.resumo}>
          {serie.summary?.replace(/<[^>]*>/g, '')}
        </Text>
        <BotaoComponente tamanho={10} grossura={0}sombra={4}corFundo="#6200EE"titulo="Voltar"onPress={() => navigation.goBack()}/>
      </View>
    </ScrollView>
  )
}

export default TelaMais

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  },
  info:{
    padding: 16,
    marginTop: 15,
  },
  nome:{
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 8,
  },
  genero:{
    color: '#AAA',
    fontSize: 14,
    marginBottom: 4,
  },
  avalicao:{
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 4,
  },
  finalizado:{
    color: '#AAA',
    fontSize: 14,
    marginBottom: 12,
  },
  resumo:{
    color: 'white',
    fontSize: 14,
    lineHeight: 22,
  },
})