import React, { useEffect, useState } from "react";
import Loading from "../../Helper/Loading";
import useMove from "../../Hooks/FetchMovie";
import Paginacao from "../../Helper/Paginacao";
import useFetchMoviesAll from "../../Hooks/FetchMoviesAll";
import * as s from "./Style";
import * as m from "../Modal/style";
import { InputResult, Movie, MoviesInformation } from "../../Types/types";
import closeImg from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";

const CreateCard: React.FC<InputResult> = ({ searchValue }) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const moviesAll = useFetchMoviesAll(searchValue);
  const [page, setPage] = useState(1);
  const [eachMovie, setMovieId]: [MoviesInformation] = useMove();

  const paginate = (pageNumber: number) => setPage(pageNumber);
  const TotalMovies = 9;
  const NumeroStart = (page - 1) * TotalMovies;
  const NumeroFinal = page * TotalMovies;
  const currentMovies = moviesAll.slice(NumeroStart, NumeroFinal);

  let columns = 3;
  if (currentMovies.length === 1) {
    columns = 1;
  } else if (currentMovies.length === 2) {
    columns = 2;
  }
  function handleClick({ currentTarget }) {
    setMovieId(currentTarget.id);
    setModalEstaAberto(true);
  }

  useEffect(() => {
    console.log(eachMovie);
  }, [eachMovie]);
  return (
    <>
      {moviesAll.length === 0 ? (
        <Loading />
      ) : (
        <>
          <s.ContainerCards columns={columns}>
            {currentMovies.map((movie: Movie) => (
              <s.Card
                key={movie.imdbID}
                className="card"
                id={movie.imdbID}
                onClick={handleClick}
              >
                <s.ImgCard
                  src={movie.Poster.replace("300", "1900")}
                  alt={movie.Title}
                  coluns={columns === 1 ? "true" : undefined}
                />
                <s.AboutCard>
                  <s.NameMovie>{movie.Title}</s.NameMovie>
                  <s.Year>{movie.Year}</s.Year>
                </s.AboutCard>
              </s.Card>
            ))}
          </s.ContainerCards>
          <Paginacao
            moviesPerPage={TotalMovies}
            totalMovies={moviesAll.length}
            paginate={paginate}
            currentPage={page}
          />
        </>
      )}
      {modalEstaAberto && (
        <m.ContainerModal>
          <m.ModalWindow>
            <m.ContainerImg>
              <m.ImgModal
                src={
                  eachMovie.Poster
                    ? eachMovie.Poster.replace("300", "1900")
                    : ""
                }
              />{" "}
            </m.ContainerImg>
            <m.ContainerInformations>
              <m.TitleModal>{eachMovie.Title}</m.TitleModal>
              <m.LancamentoSpan>Lançamento:{eachMovie.Year}</m.LancamentoSpan>
              <m.RatingMovie>Avaliação:{eachMovie.imdbRating}</m.RatingMovie>
              <m.ReceitaModal>
                Receita:
                {eachMovie.BoxOffice
                  ? eachMovie.BoxOffice.replace("$", "")
                  : ""}
                R$
              </m.ReceitaModal>
              <m.DuracaoModal>Duração:{eachMovie.Runtime}</m.DuracaoModal>
            </m.ContainerInformations>
            <m.CloseIcon
              src={closeImg}
              onClick={() => setModalEstaAberto(false)}
            />
          </m.ModalWindow>
        </m.ContainerModal>
      )}
    </>
  );
};

export default CreateCard;
