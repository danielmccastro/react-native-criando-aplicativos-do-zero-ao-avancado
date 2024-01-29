import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: null,
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
      ],
      limite: 0,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);
  }
  enviarDados() {
    if (this.state.nome === '' || this.state.idade === null) {
      Alert.alert('Preencha todos dados corretamente!');
      return;
    }
    Alert.alert(
      'Conta aberta com sucesso!! \n\n' +
        'Nome: ' +
        this.state.nome +
        '\n' +
        'Idade: ' +
        this.state.idade +
        '\n' +
        'Sexo: ' +
        this.state.sexos[this.state.sexo].sexoNome +
        ' \n' +
        'Limite Conta: ' +
        this.state.limite.toFixed(2) +
        '\n' +
        'Conta Estudante: ' +
        (this.state.estudante ? 'Ativo' : 'Inativo'),
    );
  }

  render() {
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome} />;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Banco React</Text>
        <Text style={styles.label}>Nome </Text>
        <TextInput
          style={styles.input}
          onChangeText={nomeDigitado => this.setState({nome: nomeDigitado})}
          value={this.state.nome}
          placeholder="Digite seu nome"
        />
        <Text style={styles.label}>Idade </Text>
        <TextInput
          style={styles.input}
          onChangeText={idadeDigitada => this.setState({idade: idadeDigitada})}
          value={this.state.idade}
          placeholder="Digite sua idade"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Sexo </Text>
        <Picker
          style={styles.pickerSexo}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({sexo: itemValue})
          }>
          {sexoItems}
        </Picker>
        <Text style={styles.label}>Limite </Text>
        <Slider
          minimumValue={0}
          maximumValue={2000}
          selectedValue={this.state.limite}
          onValueChange={valorSelecionado =>
            this.setState({limite: valorSelecionado.toFixed(0)})
          }
        />
        <Text style={styles.limiteTxt}>Limite selecionado: {this.state.limite}</Text>
        <View style={styles.switchArea}>
        <Text style={styles.label}>Estudante </Text>
        <Switch
          value={this.state.estudante}
          onValueChange={valorSelecionado =>
            this.setState({estudante: valorSelecionado})
          }
        />
        </View>
        <View style={styles.botaoArea}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.enviarDados()}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingStart: 15,
  },
  label: {
    marginStart: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  limiteTxt: {
    textAlign: "center",
    fontWeight:"bold",
    fontSize: 12
  },
  labelEstudante: {
    marginStart: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  botaoArea: {
    flexDirection: "row",
    justifyContent:"flex-end",
    margin: 20,
  },
  botao: {
    backgroundColor: "gray",
    padding: 15,
    color: "black",
    borderRadius: 10,
  }
});
