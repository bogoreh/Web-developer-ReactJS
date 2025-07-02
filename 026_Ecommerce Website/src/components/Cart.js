import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = ({ 
  cartItems, 
  onUpdateCartQty, 
  onRemoveFromCart, 
  onEmptyCart 
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart empty-cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="button">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <div className="cart-actions">
          <button onClick={onEmptyCart} className="empty-cart-button">
            Empty Cart
          </button>
          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;