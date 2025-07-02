import React from 'react';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <button 
          className="remove-button" 
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;