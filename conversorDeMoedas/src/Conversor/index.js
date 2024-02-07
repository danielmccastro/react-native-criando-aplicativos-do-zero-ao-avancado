import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';

import api from '../services/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valorConvertido: 0,
    };
    this.converter = this.converter.bind(this);
  }

  async converter() {
    let de_para = this.state.moedaA + '_' + this.state.moedaB;
    const response = await api.get(
      `convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`,
    );
    let cotacao = response.data[de_para];
    let resultado = cotacao * parseFloat(this.state.moedaB_valor);
    this.setState({
      valorConvertido: resultado.toFixed(2),
    });
    Keyboard.dismiss();
  }

  render() {
    const {moedaA, moedaB} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {moedaA} para {moedaB}
        </Text>
        <TextInput
          placeholder="Valor a ser convertido"
          style={styles.areaInput}
          onChangeText={moedaB_valor =>
            this.setState({moedaB_valor: moedaB_valor})
          }
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.btnArea} onPress={this.converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.valorConvertido}>{(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    margintTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  btnArea: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
});