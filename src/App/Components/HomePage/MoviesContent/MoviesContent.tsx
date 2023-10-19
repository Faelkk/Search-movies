import { useEffect } from "react";
import { MoviesCenter, ContainerGrid } from "./style";
import { Loading } from "../../Loader/Loading";

import Card from "../Card/Card";
import MovieError from "../Error/MovieError";
import useFetchMoviesBySearch from "../../../../Hooks/useFetchMovies";

interface MoviesContentProps {
  searchValue: string;
  setInputDisabled: (value: boolean) => void;
}

const MoviesContent = ({
  searchValue,
  setInputDisabled,
}: MoviesContentProps) => {
  const { moviesBySearch, loading, error } =
    useFetchMoviesBySearch(searchValue);

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
