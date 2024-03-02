import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../contexts/CartContext';
import {Title, CartBtn, ItemMark, CartText, Container} from './styles';

export default function Header() {
  const {cartProducts} = useContext(CartContext);

  const navigation = useNavigation();
  return (
    <Container>
      <Title>Produtos</Title>
      <CartBtn
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('Cart')}>
        {cartProducts.length >= 1 && (
          <ItemMark>
            <CartText>{cartProducts.length}</CartText>
          </ItemMark>
        )}
        <Feather name="shopping-cart" size={30} />
      </CartBtn>
    </Container>
  );
}
