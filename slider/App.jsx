import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          selectedValue={this.state.pizza}
          onValueChange={valorSelecionado =>
            this.setState({valor: valorSelecionado})
          }
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor='#FF0000'
        />

        <Text style={{textAlign: 'center', fontSize: 30}}>
          {this.state.valor.toFixed(1)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
