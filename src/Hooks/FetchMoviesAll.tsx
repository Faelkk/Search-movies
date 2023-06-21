import { useEffect, useState } from "react";

const useFetchMoviesAll = (searchValue) => {
  const [moviesAll, setMoviesAll] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setMoviesAll(json.Search || []);
        } else {
          throw new Error("Error finding the requested movie");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchValue]);

  return [moviesAll, isLoading];
};

export default useFetchMoviesAll;
