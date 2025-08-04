import { useEffect, useState } from 'react'
import ProductCard from '../components/ui/ProductCard'
import '../styles/Home.css'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        // In a real app, you would fetch from an API
        const dummyProducts = [
          {
            id: 1,
            title: 'Wireless Headphones',
            price: 99.99,
            originalPrice: 129.99,
            discount: 23,
            image: '/images/headphones.jpg',
            description: 'Premium wireless headphones with noise cancellation'
          },
          {
            id: 2,
            title: 'Smart Watch',
            price: 199.99,
            image: '/images/smartwatch.jpg',
            description: 'Latest smart watch with health monitoring'
          },
          {
            id: 2,
            title: 'computer vision',
            price: 199.99,
            image: '/images/smartwatch.jpg',
            description: 'Latest smart watch with health monitoring'
          },
          {
            id: 2,
            title: 'Watch',
            price: 1990,
            image: '/images/watch.jpg',
            description: 'Latest smart watch with health monitoring'
          },
          {
            id: 2,
            title: 'Labtop',
            price: 199.99,
            image: '/images/labtop.jpg',
            description: 'Latest smart watch with health monitoring'
          },
        ]
        setProducts(dummyProducts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Discover our amazing products</p>
      </section>
      
      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home