import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroProduto from './components/CadastroProduto';
import ListaProdutos from './components/ListaProdutos';
import EditarProduto from './components/EditarProduto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro de Produto" component={CadastroProduto} />
        <Stack.Screen name="Lista de Produtos" component={ListaProdutos} />
        <Stack.Screen name="Editar Produto" component={EditarProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};