import React, { useState, useEffect } from "react";
import { useSearchMovies, useGetMovieById } from "../../Hooks/FetchMovie";
import Paginacao from "../../Helper/Paginacao";
import { Loading } from "../../Helper/Loading/Loading";
import ErrorCard from "../../Helper/Error/Error";
import { MovieSearch, PropsCard } from "../../Types/types";
import Modal from "../Modal/Modal";
import { ContainerCards } from "./Style";
import CardComponent from "./CardCreate";

const Movies: React.FC<PropsCard> = ({ searchValue }) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [page, setPage] = useState(1);

  const [moviesBySearch, searchMovies, isLoadingBySearch, isErrorBySearch] =
    useSearchMovies();

  const [movieById, getMovieById, isLoadingById] = useGetMovieById();
  const paginate = (pageNumber: number) => setPage(pageNumber);
  const totalMovies = 9;
  const numeroStart = (page - 1) * totalMovies;
  const numeroFinal = page * totalMovies;
  const currentMovies = Array.isArray(moviesBySearch)
    ? moviesBySearch.slice(numeroStart, numeroFinal)
    : [];

  let columns = 3;
  if (currentMovies.length === 1) {
    columns = 1;
  } else if (currentMovies.length === 2) {
    columns = 2;
  }

  const handleSearch = (searchValue: string) => {
    if (typeof searchMovies === "function") {
      searchMovies(searchValue);
    }
  };

  const handleClick = (id: string) => {
    setModalEstaAberto(true);
    if (typeof getMovieById === "function") {
      getMovieById(id);
    }
  };

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  const closeModal = () => {
    setModalEstaAberto(false);
  };

  if (isErrorBySearch) return <ErrorCard />;
  if (isLoadingBySearch) return <Loading />;
  if (isLoadingById) return <Loading />;
  return (
    <>
      <>
        <ContainerCards columns={columns}>
          {currentMovies.map((movie: MovieSearch) => (
            <CardComponent
              key={movie.imdbID}
              movie={movie}
              columns={columns}
              handleClick={handleClick}
            />
          ))}
        </ContainerCards>
        <Paginacao
          moviesPerPage={totalMovies}
          totalMovies={
            Array.isArray(moviesBySearch) ? moviesBySearch.length : 0
          }
          paginate={paginate}
          currentPage={page}
        />
      </>
      {modalEstaAberto ? (
        <Modal movieById={movieById} closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default Movies;
