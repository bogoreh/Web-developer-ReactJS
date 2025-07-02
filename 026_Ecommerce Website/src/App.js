import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import products from './products';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const onUpdateCartQty = (productId, quantity) => {
    if (quantity <= 0) {
      onRemoveFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const onRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const onEmptyCart = () => {
    setCartItems([]);
  };

  const onPlaceOrder = () => {
    // In a real app, you would send the order to a backend here
    console.log('Order placed:', cartItems);
    onEmptyCart();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <ProductList 
                  products={products} 
                  onAddToCart={onAddToCart} 
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  onUpdateCartQty={onUpdateCartQty} 
                  onRemoveFromCart={onRemoveFromCart} 
                  onEmptyCart={onEmptyCart} 
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  cartItems={cartItems} 
                  totalPrice={totalPrice} 
                  onPlaceOrder={onPlaceOrder} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;