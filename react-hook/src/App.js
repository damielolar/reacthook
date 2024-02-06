import React, { useState } from 'react';
import MovieList from './component/movielist'; // Changed path
import Filter from './component/moviefilter'; // Changed path
import './App.css'; // Importing CSS file

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
      posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_500x749.jpg?v=1573618694",
      rating: 8.8
    },
    {
      title: "The Dark Knight",
      description: "A caped crusader, along with Commissioner Gordon, unearth a plot by the Joker.",
      posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/darkknight.building.24x36_663f2cf2-49f8-4db4-a810-5aa2c960c446_500x749.jpg?v=1697998255",
      rating: 9.0
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/interstellar2_96578326-4aae-4628-90d9-b77595627762_500x749.jpg?v=1673364530",
      rating: 8.6
    },
    {
      title: "Pulp Fiction",
      description: "Various interconnected people in Los Angeles deal with the ramifications of their actions.",
      posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
      rating: 8.9
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/shawshank.128000_c9a45f6e-7685-4a95-b3ec-0dac14f43543_500x749.jpg?v=1697998923",
      rating: 9.3
    },
    {
      title: "Forrest Gump",
      description: "The story of a man with a low IQ who achieves great things despite his disabilities and the challenges he faces.",
      posterURL: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/forrest-gump---24x36_500x749.jpg?v=1645558337",
      rating: 8.8
    }
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: '',
  });

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
      });
    } else {
      alert('Please fill in all the fields before adding a new movie.');
    }
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === '' || movie.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div className="app">
      <p className='paragraph'>Best Movies, Anywhere, Anytime</p>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        <form>
          <label>Title:</label>
          <input
            type="text"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          />

          <label>Description:</label>
          <input
            type="text"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />

          <label>Poster URL:</label>
          <input
            type="text"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
          />

          <label>Rating:</label>
          <input
            type="number"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
          />

          <button type="button" onClick={handleAddMovie}>
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};


export default App;



