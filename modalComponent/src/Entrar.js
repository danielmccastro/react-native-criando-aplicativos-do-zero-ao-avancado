import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#292929',
          width: '100%',
          height: 350,
          borderRadius: 15,
        }}>
        <Text style={{textAlign: "center", paddingTop: 15, color: '#FFF', fontSize: 28}}>
          Seja bem-vindo!
        </Text>
        <Button title="Sair" onPress={this.props.fechar} />
      </View>
    );
  }
}
