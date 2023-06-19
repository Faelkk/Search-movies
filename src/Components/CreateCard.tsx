import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import useMove from "../Hooks/FetchMovie";
import Paginacao from "./Paginacao";
import useFetchMoviesAll from "../Hooks/FetchMoviesAll";

interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

interface InputResult {
  searchValue: string;
}

const ContainerCards = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;
  box-shadow: 0 3px 10px 0 #aaa;
  padding: 5px;
  height: 450px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NameMovie = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;

const ImgCard = styled.img<{ singlecolumn?: boolean }>`
  border-radius: 3px;
  height: ${({ singlecolumn }) => (singlecolumn ? "auto" : "400px")};
  object-fit: cover;
  max-height: 400px;
  object-position: center;
  width: 100%;
  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

const Year = styled.span``;

const AboutCard = styled.span`
  font-family: "Roboto", sans-serif;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
`;

const MOVIES_PER_PAGE = 9;

const CreateCard: React.FC<InputResult> = ({ searchValue }) => {
  const moviesAll = useFetchMoviesAll(searchValue);

  const [page, setPage] = useState(1);
  // const [eachMovie, setMovieId] = useMove();

  const paginate = (pageNumber: number) => setPage(pageNumber);

  const startIndex = (page - 1) * MOVIES_PER_PAGE;
  const endIndex = page * MOVIES_PER_PAGE;
  const currentMovies = moviesAll.slice(startIndex, endIndex);

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
          <ContainerCards columns={columns}>
            {currentMovies.map((movie) => (
              <Card
                key={movie.imdbID}
                className="card"
                id={movie.imdbID}
                onClick={({ currentTarget }) => {
                  setMovieId(currentTarget.id);
                }}
              >
                <ImgCard
                  src={movie.Poster}
                  alt={movie.Title}
                  singlecolumn={columns === 1 ? "true" : undefined}
                />
                <AboutCard>
                  <NameMovie>{movie.Title}</NameMovie>
                  <Year>{movie.Year}</Year>
                </AboutCard>
              </Card>
            ))}
          </ContainerCards>
          <Paginacao
            moviesPerPage={MOVIES_PER_PAGE}
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
