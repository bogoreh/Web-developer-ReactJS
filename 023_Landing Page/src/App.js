import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiStar, FiChevronRight } from 'react-icons/fi';
import { FaTripadvisor, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('destinations');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'The island of gods with beautiful beaches and temples.',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
      description: 'Famous for its white-washed houses and stunning sunsets.',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
      description: 'Traditional temples, gardens, and cherry blossoms.',
      rating: 4.7,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'The tour was amazing! Our guide was knowledgeable and made the experience unforgettable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'Best vacation ever! Everything was perfectly organized.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      comment: 'Loved every moment. Will definitely book again!',
      rating: 4,
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <FiMapPin className="text-blue-500 text-2xl mr-2" />
            <h1 className="text-xl font-bold text-blue-600">ExploreEra</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-600 font-medium">Home</a>
            <a href="#destinations" className="hover:text-blue-600">Destinations</a>
            <a href="#tours" className="hover:text-blue-600">Tours</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-blue-600 font-medium">Home</a>
              <a href="#destinations" className="hover:text-blue-600">Destinations</a>
              <a href="#tours" className="hover:text-blue-600">Tours</a>
              <a href="#about" className="hover:text-blue-600">About Us</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-blue-50">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21')] bg-cover bg-center absolute inset-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Discover the World with Us</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Explore breathtaking destinations with our expertly crafted tours and create memories that last a lifetime.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Explore Tours
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <div className="container mx-auto px-4 -mt-12 z-20 relative">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Destination</label>
              <input type="text" placeholder="Where to?" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Check In</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Check Out</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <section id="destinations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our most popular destinations loved by travelers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <FiStar className="fill-current" />
                      <span className="ml-1 text-white">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="flex items-center text-blue-600 font-medium">
                    Explore <FiChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide the best service to make your journey memorable</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FiMapPin className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Destinations</h3>
              <p className="text-gray-600">We carefully select the most breathtaking and unique destinations for our travelers.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FiStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">5-Star Experiences</h3>
              <p className="text-gray-600">Our tours are designed to provide exceptional experiences with premium services.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FiPhone className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is available round the clock to assist you during your trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from our satisfied customers about their experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us now to book your dream vacation with exclusive offers!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <FiMapPin className="text-blue-400 text-2xl mr-2" />
                <h3 className="text-xl font-bold">ExploreEra</h3>
              </div>
              <p className="text-gray-400 mb-4">Making travel dreams come true since 2010.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaTripadvisor size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <FiPhone className="mr-2" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <FiMail className="mr-2" /> info@exploreera.com
                </li>
                <li className="flex items-center text-gray-400">
                  <FiMapPin className="mr-2" /> 123 Travel St, Adventure City
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on special offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg transition duration-300">
                  <FiMail />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ExploreEra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;