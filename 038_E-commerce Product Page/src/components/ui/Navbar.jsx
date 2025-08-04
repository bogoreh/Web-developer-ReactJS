import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">ShopEase</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">About</Link>
          <Link to="/" className="cart-icon">
            <FiShoppingCart />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar