import { useEffect } from "react";
import {
  MoviesCenter,
  ContainerGrid,
  Container,
  TitleCard,
  BtnModal,
} from "./style";

import MovieError from "../Error/MovieError";
import Loader from "../../../../Components/Helpers/Loading/Loader";
import SkeletonImage from "../../../../Components/Skeleton/Skeleton";
import Modal from "../../../../Components/Modal/Modal";
import useMoviesContent from "./useMoviesContent";

const MoviesContent = () => {
  const {
    moviesBySearch,
    error,
    loading,
    movieByIdClicked,
    isModalMovieOpen,
    onClickCard,
    setInputDisabled,
    handleClickCloseModal,
  } = useMoviesContent();

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
              <Container
                onClick={() => onClickCard(movie.imdbID)}
                key={movie.imdbID}
              >
                <SkeletonImage
                  src={movie.Poster.replace("300", "1900")}
                  alt={`imagem do filme ${movie.Title}`}
                />

                <TitleCard>{movie.Title}</TitleCard>
                <BtnModal>Ver detalhes</BtnModal>
              </Container>
            ))}
          </ContainerGrid>
        </MoviesCenter>

        {isModalMovieOpen && (
          <Modal
            movieIdClicked={movieByIdClicked}
            isModalMovieOpen={isModalMovieOpen}
            handleClickCloseModal={handleClickCloseModal}
          />
        )}
      </>
    );
};

export default MoviesContent;
