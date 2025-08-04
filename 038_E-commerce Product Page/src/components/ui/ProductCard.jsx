import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="product-card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
          {product.discount && <span className="discount-badge">-{product.discount}%</span>}
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <div className="price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">${product.price}</span>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard