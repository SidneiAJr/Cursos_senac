import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Fundo from '../Fundo';

export default function TelaInicial({ navigation }: any) {
  return (
    <Fundo img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccyseLL40mG8nZ_jfrbeW_m07v9aKjEC68jn6TS9q82KdeFMMY7ldsc4W&s=10">
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Tela Inicial | Bem Vindo!
        </Text>

        <View style={styles.botoes}>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Calculadora')}
          >
            <Text style={styles.textoBotao}>Calculadora</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Contador')}
          >
            <Text style={styles.textoBotao}>Contador</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('API')}
          >
            <Text style={styles.textoBotao}>API</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('teste')}
          >
            <Text style={styles.textoBotao}>Input Teste</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('teste2')}
          >
            <Text style={styles.textoBotao}>Relógio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('t')}
          >
            <Text style={styles.textoBotao}>Tela Teste</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('a')}
          >
            <Text style={styles.textoBotao}>Lista Teste Usuários</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('previsao')}
          >
            <Text style={styles.textoBotao}>Previsão do Tempo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('vendas')}
          >
            <Text style={styles.textoBotao}>Vendas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('vendas')}
          >
            <Text style={styles.textoBotao}>Vendas</Text>
          </TouchableOpacity>

        </View>

      </View>
    </Fundo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },

  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  botao: {
    width: '45%',
    height: 90,
    borderRadius: 20,
    backgroundColor: 'black',
    margin: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
});