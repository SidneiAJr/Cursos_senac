import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './botao';
import Titulo from './texto'
import Imagem from './imagem'
import Menu from './MenuCima'
import Fundo from './fundo'

export default function App() {
  return (
    <Fundo>
      <View style={styles.container}>
        <Menu />
        <Imagem />
        <Titulo />
        <Botao />
      </View>
    </Fundo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'transparent',
    alignItems: 'center',
     justifyContent: 'flex-start',
  },
});
