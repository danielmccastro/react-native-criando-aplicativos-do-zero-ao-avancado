import React, {Component} from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larguraAnimada: new Animated.Value(150),
      alturaAnimada: new Animated.Value(50),
      opacidadeAnimada: new Animated.Value(0),
    };

    this.carregarGrafico = this.carregarGrafico.bind(this);
    /*
Animated.timing(
  this.state.larguraAnimada, {
    toValue: 300,
    duration: 2000,
  }
).start();
*/
    /*
Animated.sequence([
  Animated.timing(
    this.state.larguraAnimada, {
      toValue: 300,
      duration: 2000,
    }
    ),
    Animated.timing(this.state.alturaAnimada, {
      toValue: 200,
      duration: 2000,
    }),
    Animated.timing(this.state.opacidadeAnimada, {
      toValue: 0,
      duration: 2000,
    })
  ]).start();
*/
    /*
Animated.parallel([
  Animated.timing(
    this.state.larguraAnimada, {
      toValue: 300,
      duration: 2000,
    }
    ),
    Animated.timing(this.state.alturaAnimada, {
      toValue: 200,
      duration: 2000,
    })
  ]).start();
*/

    /*
    Animated.sequence([
      Animated.timing(this.state.opacidadeAnimada, {
        toValue: 1,
        duration: 1500,
      }),
      Animated.parallel([
        Animated.timing(this.state.larguraAnimada, {
          toValue: 300,
          duration: 2000,
        }),
        Animated.timing(this.state.alturaAnimada, {
          toValue: 200,
          duration: 2000,
        }),
      ]),
      Animated.timing(this.state.opacidadeAnimada, {
        toValue: 0,
        duration: 1500,
      }),
    ]).start();
    */
    /*
Animated.loop(
Animated.sequence([
Animated.timing(this.state.larguraAnimada, {
  toValue: 200,
  duration: 700
}),
Animated.timing(this.state.larguraAnimada, {
  toValue: 150,
  duration: 700,
})]).start()
*/
  }

  carregarGrafico() {
    Animated.sequence([
      Animated.timing(this.state.opacidadeAnimada, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(this.state.alturaAnimada, {
        toValue: 300,
        duration: 1000,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#4169E1',
          }}>
          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{fontSize: 25, color: '#FFF'}}>Gerar grafico</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text>Vendas</Text>
          <Animated.View
            style={{
              width: this.state.larguraAnimada,
              height: this.state.alturaAnimada,
              opacity: this.state.opacidadeAnimada,
              backgroundColor: '#F00',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 22, textAlign: 'center'}}>
              R$ 150,00
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
