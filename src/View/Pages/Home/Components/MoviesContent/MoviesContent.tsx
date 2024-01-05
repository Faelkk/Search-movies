import { useEffect } from "react";
import { MoviesCenter, ContainerGrid } from "./style";

import Card from "../Card/Card";
import MovieError from "../Error/MovieError";
import { useInputContext } from "../../../../../App/Context/useInputContext";
import useFetchMoviesBySearch from "../../../../../App/Hooks/useFetchMovies";
import Loader from "../../../../../App/Components/Helpers/Loading/Loader";

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

  setInputDisabled(false);

  if (loading) return <Loader loading={loading} />;

  if (error) return <MovieError />;

  if (moviesBySearch)
    return (
      <>
        <MoviesCenter>
          <ContainerGrid>
            {moviesBySearch.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))}
          </ContainerGrid>
        </MoviesCenter>
      </>
    );
};

export default MoviesContent;
