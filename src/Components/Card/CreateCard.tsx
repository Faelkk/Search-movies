import React, { useState } from "react";
import Loading from "../../Helper/Loading";
import useMove from "../../Hooks/FetchMovie";
import Paginacao from "../../Helper/Paginacao";
import useFetchMoviesAll from "../../Hooks/FetchMoviesAll";
import * as s from "./Style";
import { InputResult, Movie } from "../../Types/types";

const CreateCard: React.FC<InputResult> = ({ searchValue }) => {
  const moviesAll = useFetchMoviesAll(searchValue);
  const [page, setPage] = useState(1);
  const [eachMovie, setMovieId] = useMove();

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
                onClick={({ currentTarget }) => {
                  setMovieId(currentTarget.id);
                }}
              >
                <s.ImgCard
                  src={movie.Poster}
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
    </>
  );
};

export default CreateCard;
