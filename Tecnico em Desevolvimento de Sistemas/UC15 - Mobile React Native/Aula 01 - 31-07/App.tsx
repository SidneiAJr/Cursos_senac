import { StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Botao from './botao';
import Titulo from './texto'
import Imagem from './imagem'
import Menu from './MenuCima'
import Fundo from './fundo'
import Input from './input'
import Caixa from './caixaPlanetas'

export default function App() {
  return (
    <SafeAreaProvider>
    <Fundo>
      <SafeAreaView style={styles.container}>
        <Menu />
        <Imagem />
        <Titulo />
        <Caixa/>
      </SafeAreaView>
    </Fundo>
    </SafeAreaProvider>
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
