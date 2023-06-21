import { useState } from "react";

function useSearchMovies() {
  const [isLoadingBySearch, setLoading] = useState(false);
  const [isErrorBySearch, setErrorSearch] = useState(false);
  const [moviesBySearch, setMoviesSearch] = useState([]);

  const searchMovies = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;
    try {
      setLoading(true);
      setErrorSearch(false);
      const response = await fetch(url);

      const result = await response.json();
      if (result.Response !== "False") {
        setMoviesSearch(result.Search || []);
      } else {
        throw new Error("Erro ao buscar filmes");
      }
    } catch (error) {
      setErrorSearch(true);
      console.log("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  return [moviesBySearch, searchMovies, isLoadingBySearch, isErrorBySearch];
}

export default useSearchMovies;
function useGetMovieById() {
  const [isLoadingById, setLoading] = useState(false);
  const [isErrorById, setErrorID] = useState(false);
  const [movieById, setMovieId] = useState(null);

  const getMovieById = async (id) => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=4a3b711b`;
    try {
      setLoading(true);
      setErrorID(false);
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setMovieId(result);
      } else {
        throw new Error("Erro ao buscar o filme");
      }
    } catch (error) {
      console.log("Erro ao buscar o filme");
      setErrorID(true);
    } finally {
      setLoading(false);
    }
  };

  return [movieById, getMovieById, isLoadingById, isErrorById];
}

export { useSearchMovies, useGetMovieById };
