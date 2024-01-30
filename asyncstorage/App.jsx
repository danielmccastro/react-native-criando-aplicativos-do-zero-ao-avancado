import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: '',
    };

    this.gravaNome = this.gravaNome.bind(this);
  }

  // ComponentDidMount - quando o component eh montado em tela
  async componentDidMount() {
    await AsyncStorage.getItem('nome').then(value => {
      this.setState({nome: value});
    });
  }

  // ComponentDidUpdate - monitora toda vez que um state eh atualizado para fazer algo
  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome;
    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input,
    });
    Alert('Salvo com sucesso');
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={text => this.setState({input: text})}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 400,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  },
});
