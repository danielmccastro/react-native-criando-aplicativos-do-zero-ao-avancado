import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';

import Pessoas from './src/Pessoas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id: '2', nome: 'Joao', idade: 22, email: 'joao@joao.com'},
        {id: '3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com'},
        {id: '4', nome: 'Paulo', idade: 15, email: 'paulo@paulo.com'},
        {id: '5', nome: 'Jose', idade: 12, email: 'jose@jose.com'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/*   <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView> */}

        <FlatList
          data={this.state.feed}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Pessoas data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
  },
});

export default App;
