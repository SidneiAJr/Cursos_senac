import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botaocomprar from './assets/botaocomprar';
import Card from './assets/card';
import Textopromo from './assets/textopromo';
import Botaocancelar from './assets/botaocancelar';
import Textomain from './assets/textomain';
import Botaolimpar from './assets/botaolimpar';
import Imgproduto from './assets/imgproduto';
import Texto from './assets/texto';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Textomain nome='Usuario'/>
        <View style={styles.box}>
        <Imgproduto endereco={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1iTTFMtS-4RyGDYKD2EeCZ3ZSYyDlhsWs85GGu_o3UZnlczyWkDEd4w&s=10'}/>
         <Textopromo/>
         <Texto nomeProduto='Nasus' valor={50}/>
        </View>
        <View style={styles.botoes}>
        <Botaocomprar/>
        <Botaocancelar/>
        <Botaolimpar/>
        </View>
      </Card>
      <Card>
        <Textomain nome='Usuario'/>
        <View style={styles.box}>
        <Imgproduto endereco={'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5723fab70e21634575011f03qr-635-gb-01-eps.jpeg?quality=70&strip=all&strip=all'}/>
         <Textopromo/>
         <Texto nomeProduto='Marea Turbo GLP 2.4 16V' valor={-500}/>
        </View>
        <View style={styles.botoes}>
        <Botaocomprar/>
        <Botaocancelar/>
        <Botaolimpar/>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25
  },
  botoes: {
    flexDirection: 'row',      // deixa lado a lado
    justifyContent: 'center',  // centraliza horizontalmente
    alignItems: 'center',      // alinha verticalmente
    gap: 10,                   // espaço entre os botões (RN mais recente)
  },
  box:{
    flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  }
});
