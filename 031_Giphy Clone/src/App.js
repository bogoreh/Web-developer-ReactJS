import { useState, useEffect } from "react";
import "./App.css";

const API_KEY = "CFf2Xn9dMFfbqJNVb4qrYhwceNwzkE3T"; // Replace with your actual API key

export default function App() {
  const [searchTerm, setSearchTerm] = useState("trending");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGifs = async (query) => {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setGifs(data.data);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGifs(searchTerm);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchGifs(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🎉 Giphy Clone</h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for GIFs..."
          className="p-2 rounded-l-md w-72 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="bg-pink-500 p-2 rounded-r-md">
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gifs.map((gif) => (
            <div key={gif.id} className="overflow-hidden rounded-lg">
              <img
                src={gif.images.fixed_height.url}
                alt={gif.title}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
