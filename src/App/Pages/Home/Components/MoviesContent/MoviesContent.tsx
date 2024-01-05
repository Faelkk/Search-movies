import { useEffect } from "react";
import { MoviesCenter, ContainerGrid } from "./style";

import Card from "../Card/Card";
import MovieError from "../Error/MovieError";
import useFetchMoviesBySearch from "../../../../../Hooks/useFetchMovies";
import { Loading } from "../../../../Components/Loader/Loading";
import { useInputContext } from "../../../../Context/useInputContext";

const MoviesContent = () => {
  const { inputValue, setInputDisabled } = useInputContext();
  const { moviesBySearch, loading, error } = useFetchMoviesBySearch(inputValue);

  useEffect(() => {
    if (loading) {
      setInputDisabled(true);
    } else {
      setInputDisabled(false);
    }
  }, [loading, setInputDisabled]);

  if (loading) {
    setInputDisabled(true);
    return <Loading />;
  }
  if (error) {
    return <MovieError />;
  }

  setInputDisabled(false);
  if (moviesBySearch) {
    return (
      <MoviesCenter>
        <ContainerGrid>
          {moviesBySearch.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </ContainerGrid>
      </MoviesCenter>
    );
  }
};

export default MoviesContent;
