import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  ItemPrice,
  ItemTitle,
  IconView,
  IconText,
  QtView,
  QtText,
} from './styles';

export default function CartList({data, addItem, removeItem}) {
  function calculatePrice(data) {
    const result = (data.price * data.quantidade).toFixed(2);
    return result;
  }

  return (
    <>
      {data.quantidade > 0 && (
        <Container>
          <View>
            <ItemTitle>{data.name}</ItemTitle>
            <ItemPrice>R$ {calculatePrice(data)}</ItemPrice>
          </View>
          <QtView>
            <IconView onPress={() => removeItem(data)}>
              <IconText>-</IconText>
            </IconView>
            <QtText>{data.quantidade}</QtText>
            <IconView onPress={() => addItem(data)}>
              <IconText>+</IconText>
            </IconView>
          </QtView>
        </Container>
      )}
    </>
  );
}
