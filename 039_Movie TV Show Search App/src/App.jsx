import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  )
}

export default App