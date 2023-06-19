import { useEffect, useState } from "react";

const useFetchMoviesAll = (searchValue) => {
  const [moviesAll, setMoviesAll] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setMoviesAll(json.Search || []);
        } else {
          throw new Error("Error finding the requested movie");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [searchValue]);

  return moviesAll;
};

export default useFetchMoviesAll;
