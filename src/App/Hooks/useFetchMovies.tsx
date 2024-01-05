import { useState, useEffect } from "react";
import { MovieById, MovieSearch } from "../Types/types";
import { GET } from "../Services";

const urlStart = "https://www.omdbapi.com/";

const useFetchMoviesBySearch = (searchValue: string) => {
  const [moviesBySearch, setMoviesBySearch] = useState<MovieSearch[] | null>(
    []
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovieBySearch = async (searchValue: string) => {
    const url = `${urlStart}?s=${searchValue}&apikey=4a3b711b`;
    try {
      setLoading(true);
      setError(false);

      const result = await GET(url);
      if (result.Response !== "False") {
        setMoviesBySearch(result.Search);
      } else {
        throw new Error("Erro ao buscar filmes");
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieBySearch(searchValue);
  }, [searchValue]);

  return { moviesBySearch, loading, error };
};

export default useFetchMoviesBySearch;

export const useFetchMoviesById = (movieId: string) => {
  const [movieById, setMoviesByid] = useState<MovieById>();
  const [loading, setLoading] = useState(false);

  const fetchMovieByid = async (movieId: string) => {
    const url = `${urlStart}?i=${movieId}&apikey=4a3b711b`;

    try {
      setLoading(true);
      const result = await GET(url);
      setMoviesByid(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieByid(movieId);
  }, [movieId]);

  return { movieById, loading };
};
