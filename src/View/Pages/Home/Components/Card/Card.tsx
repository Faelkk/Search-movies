import { Link } from "react-router-dom";
import { Container, TitleCard, BtnModal } from "./style";
import { MovieSearch } from "../../../../../Types/types";
import SkeletonImage from "../../../../../App/Skeleton/Skeleton";

interface CardProps {
  movie: MovieSearch;
}

const Card = ({ movie }: CardProps) => {
  return (
    <>
      <Container>
        <SkeletonImage
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
