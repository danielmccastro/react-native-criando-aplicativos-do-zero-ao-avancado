import React from 'react';
import {View, Text} from 'react-native';
import {Container, Titulo, Nome, BotaoSujeito, BotaoText} from './src/styles';

export default function App() {
  return (
    <Container>
      <Titulo cor="#FF0000">Sujeito programador</Titulo>
      <Nome>Ola Matheus!</Nome>
      <BotaoSujeito onPress={() => console.log('Clicou!')}>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>
    </Container>
  );
}
