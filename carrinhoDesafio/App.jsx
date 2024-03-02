import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import CartProvider from './src/contexts/CartContext';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </CartProvider>
  );
}
