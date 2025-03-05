import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const ListaProdutos = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://aula-nodejs-198f7306d3cc.herokuapp.com/api/produtos');
        setProdutos(response.data);
      } catch (error) {
        Alert.alert('Erro', 'Falha ao buscar produtos.');
      }
    };
    fetchProdutos();
  }, []);

  const excluirProduto = async (id) => {
    try {
      await axios.delete(`http://<seu-ip>:3000/api/produtos/${id}`);
      Alert.alert('Sucesso', 'Produto excluído com sucesso!');
      setProdutos(produtos.filter(produto => produto._id !== id));
    } catch (error) {
      Alert.alert('Erro', 'Falha ao excluir produto.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <View style={styles.buttons}>
              <Button title="Editar" onPress={() => navigation.navigate('Editar Produto', { produto: item })} />
              <Button title="Excluir" onPress={() => excluirProduto(item._id)} />
            </View>
          </View>
        )}
      />
      <Button title="Cadastrar Novo Produto" onPress={() => navigation.navigate('Cadastro de Produto')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default ListaProdutos;