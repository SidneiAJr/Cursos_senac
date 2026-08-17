import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { ModalBase } from '../hooks/components'

const ModalLista = ({visivel,tamanho,cor,lista,corfundo,fonte,grossuraFonte,fechar,pokemon}: ModalBase) => {

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="slide"
      onRequestClose={fechar}
    >

      <View style={styles.overlay}>

        <View style={[styles.modal,{backgroundColor: corfundo}]}
        >

          <Text
    style={{
      fontSize: tamanho,
      color: cor,
      fontFamily: fonte,
      fontWeight: grossuraFonte as any,
    }}
  >
    {lista}
  </Text>

  {pokemon && (
    <>
      <Text>⚖️ Peso: {pokemon.weight}</Text>

      <Text>📏 Altura: {pokemon.height}</Text>

      <Text>
        ⚡ Tipo:{' '}
        {pokemon.types
          ?.map((tipo: any) => tipo.type.name)
          .join(', ')}
      </Text>

      <Text>
        ❤️ HP:{' '}
        {pokemon.stats?.find(
          (stat: any) => stat.stat.name === 'hp'
        )?.base_stat}
      </Text>

      <Text>
        ⚔️ Ataque:{' '}
        {pokemon.stats?.find(
          (stat: any) => stat.stat.name === 'attack'
        )?.base_stat}
      </Text>

      <Text>
        🛡️ Defesa:{' '}
        {pokemon.stats?.find(
          (stat: any) => stat.stat.name === 'defense'
        )?.base_stat}
      </Text>
    </>
  )}


          <TouchableOpacity onPress={fechar}>
            <Text>FECHAR</Text>
          </TouchableOpacity>

        </View>

      </View>

    </Modal>
  )
}

export default ModalLista

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },
})