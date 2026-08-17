import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const listaprevisao = () => {

  const [pais, setpais] = useState('');
  
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/')
      .then(resposta => {
        setpais(resposta.data.products[0].title);
      });
  }, []);

  return (
    <View>
      <Text>{pais}</Text>
    </View>
  );
};

export default listaprevisao;