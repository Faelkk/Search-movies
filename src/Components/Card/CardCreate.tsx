import React from "react";
import ImageCard, { Card, AboutCard, NameMovie, Year } from "./Style";
import { MovieSearch } from "../../Types/types";

interface CardProps {
  movie: MovieSearch;
  columns: number;
  handleClick: (id: string) => void;
}

const CardComponent: React.FC<CardProps> = ({
  movie,
  columns,
  handleClick,
}) => {
  return (
    <Card
      key={movie.imdbID}
      className="card"
      id={movie.imdbID}
      onClick={() => handleClick(movie.imdbID)}
    >
      <ImageCard
        src={movie.Poster.replace("300", "1900")}
        alt={movie.Title}
        colums={columns === 1 ? "true" : undefined}
      />
      <AboutCard>
        <NameMovie>{movie.Title}</NameMovie>
        <Year>{movie.Year}</Year>
      </AboutCard>
    </Card>
  );
};

export default CardComponent;
