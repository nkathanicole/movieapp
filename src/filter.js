
import React, { useState } from 'react';
import MovieList from './movielist'; 

const Filter = ({ movies }) => {
  const [filter, setFilter] = useState('');
  const [rating, setRating] = useState('');

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.toLowerCase()) &&
      (rating === '' || movie.rating === rating) 
    );
  });

  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by title"
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">All ratings</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        
      </select>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Filter;