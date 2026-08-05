import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Botaocancelar from '../botaocancelar'
import Botaolimpar from '../botaolimpar'
import Botaocomprar from '../botaocomprar'
import Card from '../card'
import ImgProduto from '../imgproduto'
import TextoPromo from '../textopromo'
import Textomain from '../textomain'
import Texto from '../texto'


const pagina1 = () => {
  return (
    <Card>
        <Textomain nome='Usuario'/>
        <View style={styles.box}>
        <ImgProduto endereco={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1iTTFMtS-4RyGDYKD2EeCZ3ZSYyDlhsWs85GGu_o3UZnlczyWkDEd4w&s=10'}/>
         <TextoPromo/>
         <Texto nomeProduto='Nasus' valor={50}/>
        </View>
        <View style={styles.botoes}>
        <Botaocomprar/>
        <Botaocancelar/>
        <Botaolimpar/>
        </View>
      </Card>
  )
}

export default pagina1

const styles = StyleSheet.create({
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
})