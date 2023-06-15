import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

interface InputResult {
  searchValue: string;
}

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

const Card = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;
  box-shadow: 0 3px 10px 0 #aaa;
  padding: 5px;
  cursor: pointer;
`;

const NameMovie = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;
const ImgCard = styled.img`
  border-radius: 3px;
  height: 400px;
  max-height: 400px;
  min-height: 400px;
  object-fit: size;
  object-position: center;
  width: 100%;
`;

const Year = styled.span``;
const AboutCard = styled.span`
  font-family: "Roboto", sans-serif;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
`;

const Btn = styled.button`
  background: #0c4369;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    background: #1788cf;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
`;
interface PaginacaoMoviesProps {
  moviesPerPage: number;
  totalMovies: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const PaginacaoMovies: React.FC<PaginacaoMoviesProps> = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
}) => {
  const pageNumbers = Math.ceil(totalMovies / moviesPerPage);

  return (
    <ContainerButtons>
      {pageNumbers > 1 && currentPage > 1 && (
        <Btn onClick={() => paginate(currentPage - 1)}>Página anterior</Btn>
      )}
      {pageNumbers > 1 && currentPage < pageNumbers && (
        <Btn onClick={() => paginate(currentPage + 1)}>Próxima página</Btn>
      )}
    </ContainerButtons>
  );
};

const CreateCard: React.FC<InputResult> = ({ searchValue }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [moviesPerPage] = useState(9);

  async function fetchMovies() {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`;
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json.Search || []);
    document.body.style.height = "auto";
  }

  useEffect(() => {
    fetchMovies();
  }, [searchValue]);

  const numeroPrimeiroFilme = (page - 1) * moviesPerPage;
  const numeroUltimoFilme = page * moviesPerPage;
  const filmeAtual = movies.slice(numeroPrimeiroFilme, numeroUltimoFilme);

  const paginate = (pageNumbers: number) => setPage(pageNumbers);

  return (
    <>
      <ContainerCards>
        {filmeAtual.map((movie) => (
          <Card key={movie.imdbID} className="card" id={movie.imdbID}>
            <ImgCard src={movie.Poster} alt={movie.Title} />
            <AboutCard>
              <NameMovie>{movie.Title}</NameMovie>
              <Year>{movie.Year}</Year>
            </AboutCard>
          </Card>
        ))}
      </ContainerCards>
      <PaginacaoMovies
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
        currentPage={page}
      />
    </>
  );
};

export default CreateCard;
