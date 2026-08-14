import { StyleSheet,View } from 'react-native'
import React from 'react'
import TelaRelogoio from '../Relogoio'
import Logo from '../logo'

const TelaRelogio = () => {
  return (
    <View style={styles.container}>
      <TelaRelogoio tamanho={25} color='black' peso='900' alinhamento='center' borderRadius={50}/>
      <Logo url={'https://123ecos.com.br/wp-content/uploads/2023/04/biomas-montanos.webp'}width={360} height={280} alt='comunismo' resizeMode='cover'/>
      <Logo url={'https://www.papeiseparede.com.br/7634-thickbox_default/papel-de-parede-paisagem-montanhas-geladas.jpg.webp'}width={360} height={280} alt='comunismo' resizeMode='cover'/>
    </View>
  )
}

export default TelaRelogio

const styles = StyleSheet.create({
    container:{
    flex: 1,
    padding: 20,
  },
})