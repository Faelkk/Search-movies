import React, { useState, useEffect } from "react";
import { useSearchMovies, useGetMovieById } from "../../Hooks/FetchMovie";
import Paginacao from "../../Helper/Paginacao";

import ImageCard, {
  ContainerCards,
  Card,
  AboutCard,
  NameMovie,
  Year,
} from "./Style";
import {
  ContainerModal,
  ModalWindow,
  ContainerImg,
  ImgModal,
  ContainerInformations,
  TitleModal,
  LancamentoSpan,
  RatingMovie,
  ReceitaModal,
  DuracaoModal,
  CloseIcon,
} from "../Modal/style";
import closeImg from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import { Loading } from "../../Helper/Loading/Loading";
import ErrorCard from "../../Helper/Error/Error";

const CardCreator = ({ searchValue }) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [page, setPage] = useState(1);

  const [moviesBySearch, searchMovies, isLoadingBySearch, isErrorBySearch] =
    useSearchMovies();

  const [movieById, getMovieById, isLoadingById, isErrorById] =
    useGetMovieById();

  const paginate = (pageNumber) => setPage(pageNumber);
  const totalMovies = 9;
  const numeroStart = (page - 1) * totalMovies;
  const numeroFinal = page * totalMovies;
  const currentMovies = moviesBySearch.slice(numeroStart, numeroFinal);

  let columns = 3;
  if (currentMovies.length === 1) {
    columns = 1;
  } else if (currentMovies.length === 2) {
    columns = 2;
  }

  const handleSearch = (searchValue) => {
    searchMovies(searchValue);
  };

  const handleClick = (id) => {
    setModalEstaAberto(true);
    getMovieById(id);
  };

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  if (isErrorBySearch) return <ErrorCard />;
  if (isLoadingBySearch) return <Loading />;
  return (
    <>
      <>
        <ContainerCards columns={columns}>
          {currentMovies.map((movie) => (
            <Card
              key={movie.imdbID}
              className="card"
              id={movie.imdbID}
              onClick={() => handleClick(movie.imdbID)}
            >
              <ImageCard
                src={movie.Poster.replace("300", "1900")}
                alt={movie.Title}
                coluns={columns === 1 ? "true" : undefined}
              />
              <AboutCard>
                <NameMovie>{movie.Title}</NameMovie>
                <Year>{movie.Year}</Year>
              </AboutCard>
            </Card>
          ))}
        </ContainerCards>
        <Paginacao
          moviesPerPage={totalMovies}
          totalMovies={moviesBySearch.length}
          paginate={paginate}
          currentPage={page}
        />
      </>
      {modalEstaAberto && isLoadingById ? (
        <Loading />
      ) : modalEstaAberto ? (
        <ContainerModal>
          <ModalWindow>
            <ContainerImg>
              <ImgModal
                src={
                  movieById && movieById.Poster
                    ? movieById.Poster.replace("300", "1900")
                    : ""
                }
              />
            </ContainerImg>
            <ContainerInformations>
              <TitleModal>{movieById && movieById.Title}</TitleModal>
              <LancamentoSpan>
                Lançamento: {movieById && movieById.Released}
              </LancamentoSpan>
              <RatingMovie>
                Avaliação: {movieById && movieById.imdbRating}
              </RatingMovie>
              <ReceitaModal>
                Receita:{" "}
                {movieById && movieById.BoxOffice
                  ? movieById.BoxOffice.replace("$", "")
                  : ""}{" "}
                R$
              </ReceitaModal>
              <DuracaoModal>
                Duração: {movieById && movieById.Runtime}
              </DuracaoModal>
            </ContainerInformations>
            <CloseIcon
              src={closeImg}
              onClick={() => {
                setModalEstaAberto(false);
              }}
            />
          </ModalWindow>
        </ContainerModal>
      ) : null}{" "}
    </>
  );
};

export default CardCreator;
