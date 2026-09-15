import { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button, Card, Text, PaperProvider } from 'react-native-paper'
import { useAudioPlayer } from 'expo-audio'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { evolucoes } from './constants/Pokemons'
import BotoesAcao from './components/Botoesacao'
import StatusPokemon from './components/Statuspokemon'
import ModalEscolha from './components/Modalescolha'
import DialogAlerta from './components/Dialogalerta'
import BotaoSalvar from './components/BotaoSalvar'

const getId = (url: string) => {
  const partes = url.split('/')
  return partes[partes.length - 2]
}

export default function TelaTreinar() {
  const [alimentar, setAlimentar] = useState(100)
  const [felicidade, setFelicidade] = useState(100)
  const [higiene, setHigiene] = useState(100)
  const [energia, setEnergia] = useState(100)
  const [pokemonSorteado, setPokemonSorteado] = useState<any>()
  const [escolhendo, setEscolhendo] = useState(false)
  const [level, setLevel] = useState(0)
  const [mensagem, setMensagem] = useState('')

  const player = useAudioPlayer(require('../pok.mp3'))
  const player2 = useAudioPlayer(require('../up.mp3'))

  const pokemonSemCondicoes = alimentar === 0 && energia === 0 && higiene === 0 && felicidade === 0

  const tocar = async () => { await player.seekTo(0); player.play() }
  const tocar2 = async () => { await player2.seekTo(0); player2.play() }

  const acaoAlimentar = () => {
    if (alimentar >= 100) { setMensagem("Seu Pokémon esta sem fome!"); return }
    setAlimentar(prev => Math.min(100, prev + 25))
    setFelicidade(prev => Math.min(100, prev + 25))
  }

  const acaoBrincar = () => {
    if (energia <= 0) { setMensagem("Seu Pokémon já está Cansado!"); return }
    if (alimentar <= 0) { setMensagem("Seu Pokémon está com fome!"); return }
    setEnergia(prev => Math.max(0, prev - 15))
    setFelicidade(prev => Math.min(100, prev + 10))
    setAlimentar(prev => Math.max(0, prev - 5))
    setHigiene(prev => Math.max(0, prev - 10))
    setLevel(prev => prev + 1)
  }

  const acaoLimpar = () => {
    if (higiene >= 100) { setMensagem("Seu Pokémon já está limpo! 🧼"); return }
    setHigiene(prev => Math.min(100, prev + 20))
    setFelicidade(prev => Math.min(100, prev + 5))
  }

  const acaoDormir = () => {
    if (energia >= 100) { setMensagem("Seu Pokémon não está cansado! 😴"); return }
    setEnergia(prev => Math.min(100, prev + 30))
    setFelicidade(prev => Math.min(100, prev + 5))
  }

  const escolherPokemon = (poke: any) => {
    tocar()
    setPokemonSorteado({ name: poke.name, url: `https://pokeapi.co/api/v2/pokemon/${poke.id}/` })
    setLevel(0)
    setEscolhendo(false)
  }

  useEffect(() => {
  if (!pokemonSorteado) return
  const nomeAtual = pokemonSorteado.name.toLowerCase() as keyof typeof evolucoes
  const evolucao = evolucoes[nomeAtual]
  if (evolucao && level >= evolucao.nivel) {
    tocar2()
    setPokemonSorteado({ name: evolucao.evolui, url: `https://pokeapi.co/api/v2/pokemon/${evolucao.id}/` })
    setLevel(0)
  }
}, [level])

useEffect(() => {
  const carregar = async () => {
    const salvo = await AsyncStorage.getItem('pokemon_salvo')
    if (salvo) {
      const { name, url, level } = JSON.parse(salvo)
      setPokemonSorteado({ name, url })
      setLevel(level)
    }
  }
  carregar()
}, [])

  return (
    <PaperProvider>
      <View style={styles.tela}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <View style={styles.topo}>
              <Text style={styles.titulo}>Minha Pokédex</Text>
              <Image
                source={{ uri: 'https://img.icons8.com/color/80/ultra-ball.png' }}
                style={styles.logo}
              />
            </View>

            <View style={styles.pokemon}>
              <Text style={styles.level}>Nivel Atual: {level}</Text>
              <Button style={styles.botao} onPress={() => setEscolhendo(true)}>
                <Text style={styles.textoBotao}>Escolher Inicial</Text>
              </Button>
              <BotaoSalvar pokemonSorteado={pokemonSorteado} level={level} />
            </View>

            <Image
  style={styles.img}
  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonSorteado ? getId(pokemonSorteado.url) : '1'}.gif` }}
/>

            <BotoesAcao
              desabilitado={pokemonSemCondicoes}
              onAlimentar={acaoAlimentar}
              onBrincar={acaoBrincar}
              onLimpar={acaoLimpar}
              onDormir={acaoDormir}
            />

            <StatusPokemon
              nome={pokemonSorteado?.name}
              alimentar={alimentar}
              energia={energia}
              higiene={higiene}
              felicidade={felicidade}
            />
          </Card>
        </View>

        <ModalEscolha
          visivel={escolhendo}
          onEscolher={escolherPokemon}
          onFechar={() => setEscolhendo(false)}
        />

        <DialogAlerta mensagem={mensagem} onFechar={() => setMensagem('')} />
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#F5F5F5' },
  topo: { height: 100, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 26, fontWeight: 'bold', color: 'white', textAlign: 'center' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 1, backgroundColor: '#DC0A2D' },
  card: { backgroundColor: '#f50000ce', elevation: 5, borderRadius: 10, borderColor: 'black', borderWidth: 6, width: 420 },
  img: { backgroundColor: '#ffffff', borderRadius: 10, borderColor: 'black', borderWidth: 3, height: 300, width: '100%' },
  botao: { backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 200, height: 50, borderRadius: 15, borderColor: 'black', borderWidth: 2 },
  logo: { width: 100, height: 100, borderColor: 'white', borderWidth: 2, borderRadius: 80 },
  level: { fontSize: 35, color: 'white', fontWeight: '900' },
  pokemon: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  textoBotao: { color: 'white', fontWeight: '900', textAlign: 'center' },
})