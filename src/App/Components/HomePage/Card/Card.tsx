import { MovieSearch } from "../../../../Types/types";
import { BtnModal, CardIcon, Container, TitleCard } from "./style";

import { Link } from "react-router-dom";

interface CardProps {
  movie: MovieSearch;
}

const Card = ({ movie }: CardProps) => {
  return (
    <>
      <Container>
        <CardIcon
          src={movie.Poster.replace("300", "1900")}
          alt={`imagem do filme ${movie.Title}`}
        />
        <TitleCard>{movie.Title}</TitleCard>
        <Link to={`/${movie.imdbID}`} className="linkCard">
          <BtnModal>Ver detalhes</BtnModal>
        </Link>
      </Container>
    </>
  );
};

export default Card;
