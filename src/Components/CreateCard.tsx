import React from "react";
const CreateCard = ({ searchValue }) => {
  const [movies, setMovie] = React.useState([]);

  async function fetchMovies() {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;
    const response = await fetch(url);
    const json = await response.json();
    setMovie(json.Search || []);
  }

  fetchMovies();
  console.log(movies);
  return (
    <>
      {" "}
      {movies.map((movie) => (
        <div key={movies.imdbId} className="card" id={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </>
  );
};

export default CreateCard;
