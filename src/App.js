import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';


const App = () =>{}
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Father Stu',
      description: 'Father Stu is a 2022 biographical drama film starring Mark Wahlberg as Stuart Long, a boxer-turned-Catholic priest who lives with a progressive muscle disorder.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/d/db/Father_Stu.jpg',
      rating: 'PG',
      trailer: 'https://youtu.be/DHREzAdyCPs?si=4xWT1_MDgiBlfb-8'
    },
    {
      id: 2,
      title: 'Sound of Music',
      description: 'Set in Austria on the eve of the Anschluss in 1938, the musical tells the story of Maria, who takes a job as governess to a large family while she decides whether to become a nun.',
      posterURL: 'https://cinesocialuk.com/wp-content/uploads/2021/02/sound-of-music-poster.jpg',
      rating: 'All Rating',
      trailer: 'https://youtu.be/aMMgcAqOYbI?si=dBpOMWYcMtE6ZBNm'
    },
  ]);

  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: 'Encanto',
      description: 'This is a new movie',
      posterURL: 'https://musicart.xboxlive.com/7/2d0e5200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      rating: 'All Rating',
      trailer: 'https://youtu.be/CaimKeDcudo?si=Xya_e7IduwWSKWKm'


  setmovies([...movies, newMovie]);
};
  return (
    <Router>
      <div className="app">
        <h1>Movie List</h1>
        <button onClick={addMovie}>Add New Movie</button>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.posterURL} alt={movie.title} style={{ width: '200px' }} />
          </Link>
        </div>
      ))}
    </div>
  );
};


const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default App;

