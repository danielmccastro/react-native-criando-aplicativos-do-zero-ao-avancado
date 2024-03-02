import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext({});

function CartProvider({children}) {
  const products = [
    {id: '1', name: 'Coca-Cola', price: 19.9},
    {id: '2', name: 'Chocolate', price: 6.5},
    {id: '3', name: 'Queijo 500g', price: 15},
    {id: '4', name: 'Batata frita', price: 23.9},
    {id: '5', name: 'Guarana', price: 6},
  ];
  const [storeProducts, setStoreProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    function getStoreItems() {
      const numberOfProducts = products.map(item => {
        return {...item, quantidade: 0};
      });
      setStoreProducts(numberOfProducts);
    }
    getStoreItems();
  }, []);

  function addItem(item) {
    const itemExistente = cartProducts.find(
      cartItem => cartItem.id === item.id,
    );
    if (itemExistente) {
      const novoCarrinho = cartProducts.map(cartItem =>
        cartItem.id === item.id
          ? {...cartItem, quantidade: cartItem.quantidade + 1}
          : cartItem,
      );
      setCartProducts(novoCarrinho);
    } else {
      setCartProducts([...cartProducts, {...item, quantidade: 1}]);
    }
  }

  function removeItem(item) {
    const itemExistente = cartProducts.find(
      cartItem => cartItem.id === item.id,
    );
    if (itemExistente) {
      const newCart = cartProducts.map(cartItem =>
        cartItem.id === item.id
          ? {...cartItem, quantidade: cartItem.quantidade - 1}
          : cartItem,
      );
      const updatedCart = newCart.filter(obj => obj.quantidade !== 0);
      setCartProducts(updatedCart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        storeProducts,
        cartProducts,
        setCartProducts,
        addItem,
        removeItem,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
