import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {useRoute, useNavigation} from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Sobre() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Sobre' : route.params?.nome,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>SOBRE</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button
        title="Tela contatos"
        onPress={() => navigation.navigate('Contato')}
      />
        <Button
        title="Voltar tela"
        onPress={() => navigation.goBack()}
      />
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
