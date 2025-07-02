import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, totalPrice, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="checkout">
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order has been placed.</p>
        <Link to="/" className="button">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="total">Total: ${totalPrice.toFixed(2)}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <h3>Payment Method</h3>
          <div className="form-group">
            <select 
              name="paymentMethod" 
              value={formData.paymentMethod} 
              onChange={handleChange}
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
          
          <button type="submit" className="place-order-button">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;