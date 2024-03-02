import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Container,
  ItemTitle,
  ItemPrice,
  AddIconView,
  AddIconText,
} from './styles';

export default function ItemList({data, addItem}) {
  return (
    <Container>
      <View>
        <ItemTitle key={data.id}>{data.name}</ItemTitle>
        <ItemPrice>R$ {data.price.toFixed(2)}</ItemPrice>
      </View>
      <AddIconView onPress={() => addItem(data)}>
        <AddIconText>+</AddIconText>
      </AddIconView>
    </Container>
  );
}
