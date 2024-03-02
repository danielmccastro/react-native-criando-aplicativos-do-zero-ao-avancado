import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, Button, Text} from 'react-native';
import {CartContext} from '../../contexts/CartContext';
import CartList from '../../components/CartList';
import {CartTotalText} from './styles';

export default function Cart() {
  const {cartProducts, addItem, removeItem} = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState('');

  function calculateTotal(cartProducts) {
    const totalPerItem = cartProducts.map(item =>
      Number((item.price * item.quantidade).toFixed(2)),
    );
    const cartTotal = totalPerItem.reduce((value, prevValue) => {
      return Number((value + prevValue).toFixed(2));
    }, 0);
    setCartTotal(cartTotal);
    return cartTotal;
  }

  useEffect(() => {
    calculateTotal(cartProducts);
  }, [cartProducts]);

  return (
    <View>
      <FlatList
        data={cartProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CartList data={item} addItem={addItem} removeItem={removeItem} />
        )}
      />
      {cartProducts.length > 0 ? (
        <CartTotalText>Total: R$ {cartTotal}</CartTotalText>
      ) : (
        <CartTotalText>Carrinho vazio!</CartTotalText>
      )}
    </View>
  );
}
