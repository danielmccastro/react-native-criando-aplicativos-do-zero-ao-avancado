import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function navegaDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button title="Ir para detalhes" onPress={navegaDetalhes} />
      <Button title="Abrir Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
