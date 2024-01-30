import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gasolina: '',
      alcool: '',
      combustivel: '',
      modalVisible: false,
    };

    this.calcula = this.calcula.bind(this);
    this.fecha = this.fecha.bind(this);
  }

  calcula() {
    let gasolina = parseFloat(this.state.gasolina);
    let alcool = parseFloat(this.state.alcool);
    if (!isNaN(gasolina) && !isNaN(alcool)) {
      let result = alcool / gasolina;
      console.log(result);
      result <= 0.7
        ? this.setState({combustivel: 'Álcool'})
        : this.setState({combustivel: 'Gasolina'});
      Keyboard.dismiss();
      this.setState({modalVisible: true});
    } else {
      Alert.alert('Insira um valor númerico');
      return;
    }
  }

  fecha(valor) {
    this.setState({modalVisible: valor});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image source={require('./src/img/logo.png')} />
            <Text style={styles.headerTxt}>Qual melhor opção?</Text>
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.inputTxtLabel}>Álcool</Text>
            <TextInput
              value={this.state.alcool}
              onChangeText={text => this.setState({alcool: text})}
              style={styles.inputTxt}
              placeholder={'Preço por litro'}
            />
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.inputTxtLabel}>Gasolina</Text>
            <TextInput
              value={this.state.gasolina}
              onChangeText={text => this.setState({gasolina: text})}
              style={styles.inputTxt}
              placeholder={'Preço por litro'}
            />
          </View>
          <TouchableOpacity style={styles.btnArea} onPress={this.calcula}>
            <Text style={styles.btnTxt}>Calcular</Text>
          </TouchableOpacity>
          <Modal
            style={styles.modalArea}
            animationType="slide"
            visible={this.state.modalVisible}>
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <Image source={require('./src/img/gas.png')} />
                <Text style={styles.headerTxt}>
                  Compensa usar {this.state.combustivel}
                </Text>
                <Text style={styles.inputTxtLabel}>Com os preços:</Text>
                <Text style={styles.inputTxtLabel}>Álcool: R$ {this.state.alcool}</Text>
                <Text style={styles.inputTxtLabel}>Gasolina: R$ {this.state.gasolina}</Text>
                <TouchableOpacity style={styles.btnArea} onPress={() => this.fecha(false)}>
                  <Text style={styles.btnTxt}>Calcular novamente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EEEA',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerTxt: {
    marginVertical: 25,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#776B5D',
  },
  inputArea: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  inputTxtLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#776B5D',
  },
  inputTxt: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    paddingLeft: 10,
    fontSize: 16,
  },
  btnArea: {
    backgroundColor: '#B0A695',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#776B5D',
    borderRadius: 5,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F3EEEA',
  },
  modalArea: {
    flex: 1,
    backgroundColor: '#F3EEEA',
    justifyContent: 'center',
  },
  resultTxt: {
    marginVertical: 25,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#776B5D',
  },
});
