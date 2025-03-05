import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
//import { useNavigation } from '@react-navigation/native';

const CadastroProduto = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const cadastrarProduto = async () => {
    try {
      await axios.post('http://aula-nodejs-198f7306d3cc.herokuapp.com/api/produtos', {
        nome,
        descricao,
        preco: parseFloat(preco),
      });
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      setNome('');
      setDescricao('');
      setPreco('');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao cadastrar produto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <Button title="Cadastrar" onPress={cadastrarProduto} />
      <Button title="Lista de Produtos" onPress={() => navigation.navigate('Lista de Produtos')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CadastroProduto;