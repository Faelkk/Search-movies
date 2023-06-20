import React, { useEffect, useState } from "react";

function useMove() {
  const [movieId, setMovieId] = useState("");
  const [eachMovie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=4a3b711b`
      );
      const result = await response.json();
      if (response.ok) {
        setMovie(result);
      }
    };
    if (movieId !== "") {
      fetchMovie();
    }
  }, [movieId]);

  return [eachMovie, setMovieId];
}

export default useMove;
