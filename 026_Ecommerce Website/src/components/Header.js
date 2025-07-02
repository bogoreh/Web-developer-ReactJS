import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">ShopNow</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Cart {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;