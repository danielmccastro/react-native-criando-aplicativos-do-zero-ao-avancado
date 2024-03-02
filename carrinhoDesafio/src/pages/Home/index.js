import React, {useContext} from 'react';
import {View, Button, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../contexts/CartContext';
import ItemList from '../../components/ItemList';
import Header from '../../components/Header';

export default function Home() {
  const {products, storeProducts, cartProducts, setCartProducts, addItem} =
    useContext(CartContext);
  console.log(cartProducts);
  const navigation = useNavigation();

  return (
    <View>
      <Header />
      <FlatList
        keyExtractor={item => item.id}
        data={storeProducts}
        renderItem={({item}) => <ItemList data={item} addItem={addItem} />}
      />
    </View>
  );
}
