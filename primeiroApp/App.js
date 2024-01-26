import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput} from 'react-native';

/* function App() {
  return (
    <View>
      <Text>Ola Mundo!</Text>
    </View>
  );
} */

class App extends Component {
  /*  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome,
    });
  } */

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };
    this.entrar = this.entrar.bind(this);
  }

  pegaNome(texto) {
    if (texto.length > 0) {
      this.setState({nome: 'Bem vindo: ' + texto});
    } else {
      this.setState({nome: ''});
    }
  }

  entrar() {
    if (this.state.input === '') {
      alert('Digite seu nome!');
      return;
    }
    this.setState({nome: 'Bem-vindo, ' + this.state.input});
  }

  render() {
    /*    let nome = 'Matheus'; */
    return (
      <View style={styles.container}>
        {/* 
        <Button title="Entrar" onPress={() => this.entrar('Algum texto')} />
        <Text>Ola Mundo!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Sujeito Programador
        </Text>
        <Text style={{fontSize: 30}}>{nome}</Text>
        <Jobs largura={100} altura={200} nome={'Fulano'} />
        <Text style={{fontSize: 23, color: 'red', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
        <View style={{flex: 2, backgroundColor: 'yellow'}}></View>
        <View style={{height: 65, backgroundColor: '#222'}}></View>
        <View style={{flex: 1, backgroundColor: '#FFF'}}></View>
        <View style={{height: 65, backgroundColor: '#222'}}></View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
          <View
            style={{width: 100, height: 50, backgroundColor: 'green'}}></View>
          <View style={{height: 50, backgroundColor: 'red'}}></View>
          <View style={{height: 50, backgroundColor: 'yellow'}}></View>
        </View>
        <View></View>
       */}
        <TextInput
          style={styles.input}
          placeholder={'Digite seu nome'}
          underlineColorAndroid={'transparent'}
          onChangeText={texto => this.setState({input: texto})}
        />
        <Button title="Entrar" onPress={this.entrar} />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;

/* class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
} */
