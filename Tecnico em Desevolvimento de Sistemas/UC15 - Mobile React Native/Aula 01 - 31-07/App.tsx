import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './botao';
import Titulo from './texto'
import Imagem from './imagem'
import Menu from './MenuCima'

export default function App() {
  return (
    <View style={styles.container}>
       <Menu/>
      <Imagem/>
      <Titulo/>
      <Botao/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#866e74ff',
    alignItems: 'center',
     justifyContent: 'flex-start',
  },
});
