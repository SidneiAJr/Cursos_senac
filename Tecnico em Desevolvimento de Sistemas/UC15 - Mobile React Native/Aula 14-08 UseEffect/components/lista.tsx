import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { listaUniversal } from '../hooks/components';

const Lista = <T = any>({
  dados,
  renderItem,
  keyExtractor,
  horizontal,
  numColumns,
  separador,
  vazio,
  estilo,
}: listaUniversal<T>) => {
  return (
    <FlatList
      data={dados}
      renderItem={({ item, index }) => renderItem(item, index)}
      keyExtractor={
        keyExtractor ||
        ((item: any, index) => String(item.id || index))
      }
      horizontal={horizontal}
      numColumns={numColumns}
      ItemSeparatorComponent={separador}
      ListEmptyComponent={vazio}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      style={estilo}
      contentContainerStyle={styles.lista}
    />
  );
};

export default Lista;

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 20,
  },
});