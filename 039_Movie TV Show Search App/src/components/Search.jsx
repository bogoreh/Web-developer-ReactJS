import { useState, useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { search } = useContext(MovieContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    search(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Search