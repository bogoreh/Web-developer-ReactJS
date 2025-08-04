import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      try {
        // In a real app, you would fetch from an API using the id
        const dummyProducts = [
          {
            id: 1,
            title: 'Wireless Headphones',
            price: 99.99,
            originalPrice: 129.99,
            discount: 23,
            image: '/images/headphones.jpg',
            description: 'Premium wireless headphones with noise cancellation',
            features: [
              'Active Noise Cancellation',
              '30-hour battery life',
              'Bluetooth 5.0',
              'Built-in microphone'
            ],
            rating: 4.5,
            reviews: 128
          },
          // Add more products as needed
        ]
        const foundProduct = dummyProducts.find(p => p.id === parseInt(id))
        setProduct(foundProduct)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <div className="loading">Loading...</div>
  if (!product) return <div className="not-found">Product not found</div>

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  return (
    <motion.div 
      className="product-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-container">
        <div className="product-images">
          <img src={product.image} alt={product.title} className="main-image" />
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          
          <div className="price-section">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">${product.price}</span>
            {product.discount && (
              <span className="discount-badge">Save {product.discount}%</span>
            )}
          </div>
          
          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                {i < Math.floor(product.rating) ? '★' : '☆'}
              </span>
            ))}
            <span className="review-count">({product.reviews} reviews)</span>
          </div>
          
          <p className="description">{product.description}</p>
          
          {product.features && (
            <div className="features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          
          <button className="add-to-cart-btn">Add to Cart - ${(product.price * quantity).toFixed(2)}</button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetail