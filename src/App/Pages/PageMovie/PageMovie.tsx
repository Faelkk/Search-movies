import { useFetchMoviesById } from "../../../Hooks/useFetchMovies";

import {
  Container,
  ContainerImage,
  ContainerInfo,
  Description,
  GenreText,
  ImgIcon,
  ImgMovie,
  Info,
  PageCenter,
  TextInfo,
  TitleMovie,
} from "./style";

import iconRating from "../../../assets/star-filled-rate-rating-bookmark-favourite-save-priority-important-svgrepo-com.svg";
import iconReleased from "../../../assets/calendar-svgrepo-com.svg";
import iconMoney from "../../../assets/money-bag-svgrepo-com.svg";
import iconAwards from "../../../assets/trophy-svgrepo-com.svg";
import iconRunTime from "../../../assets/time-svgrepo-com.svg";
import iconWritter from "../../../assets/writer-write-blogger-work-at-desk-svgrepo-com.svg";
import iconDirectors from "../../../assets/film-director-profession-director-movie-svgrepo-com.svg";
import { Loading } from "../../Components/Loader/Loading";

const PageMovie = () => {
  const idMovie = location.pathname.slice(1);
  const { movieById, loading } = useFetchMoviesById(idMovie);

  if (loading) return <Loading />;

  if (!movieById) return null;
  return (
    <Container>
      <PageCenter>
        <ContainerImage>
          <ImgMovie
            src={movieById.Poster.replace("300", "1900")}
            alt={`imagem do filme ${movieById.Title}`}
          />
        </ContainerImage>
        <ContainerInfo>
          <TitleMovie>{movieById.Title}</TitleMovie>
          <Description>{movieById.Plot}</Description>
          <GenreText>{`Gender: ${movieById.Genre}`}</GenreText>

          <Info>
            <ImgIcon src={iconRating} />
            <TextInfo>
              Rating in <strong>${movieById.Ratings[0].Value}</strong>
            </TextInfo>
          </Info>

          <Info>
            <ImgIcon src={iconReleased} />
            <TextInfo>{`Released in ${movieById.Released}`}</TextInfo>
          </Info>
          <Info>
            <ImgIcon src={iconAwards} />
            <TextInfo>{`Awards: ${movieById.Awards}`}</TextInfo>
          </Info>

          <Info>
            <ImgIcon src={iconMoney} />
            <TextInfo>{`Profit: ${
              movieById.BoxOffice ? movieById.BoxOffice : "profit unknown"
            }`}</TextInfo>
          </Info>

          <Info>
            <ImgIcon src={iconRunTime} />
            <TextInfo>{`Duration: ${movieById.Runtime}`}</TextInfo>
          </Info>

          <Info>
            <ImgIcon src={iconDirectors} />
            <TextInfo>{`Directors: ${movieById.Director}`}</TextInfo>{" "}
          </Info>
          <Info>
            <ImgIcon src={iconWritter} />
            <TextInfo>{`Writer: ${movieById.Writer}`}</TextInfo>
          </Info>
        </ContainerInfo>
      </PageCenter>
    </Container>
  );
};

export default PageMovie;
