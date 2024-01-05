import { useFetchMoviesById } from "../../../App/Hooks/useFetchMovies";
import ReactPortal from "../ReactPortal/ReactPortal";
import {
  BtnIconClose,
  ContainerImage,
  ContainerInfo,
  Description,
  GenreText,
  IconClose,
  ImageMovie,
  ImgIcon,
  Info,
  ModalWindow,
  ModalWithOverflow,
  Overlay,
  TextInfo,
  TitleMovie,
} from "./style";

interface ModalProps {
  movieIdClicked: string;
  isModalMovieOpen: boolean;
  handleClickCloseModal: () => void;
}

import iconRating from "../../../assets/star-filled-rate-rating-bookmark-favourite-save-priority-important-svgrepo-com.svg";
import iconReleased from "../../../assets/calendar-svgrepo-com.svg";
import iconMoney from "../../../assets/money-bag-svgrepo-com.svg";
import iconAwards from "../../../assets/trophy-svgrepo-com.svg";
import iconRunTime from "../../../assets/time-svgrepo-com.svg";
import iconWriter from "../../../assets/writer-write-blogger-work-at-desk-svgrepo-com.svg";
import iconDirectors from "../../../assets/film-director-profession-director-movie-svgrepo-com.svg";
import imgClose from "../../../assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import Loader from "../Helpers/Loading/Loader";

const Modal = ({
  movieIdClicked,
  isModalMovieOpen,
  handleClickCloseModal,
}: ModalProps) => {
  const { movieById, loading } = useFetchMoviesById(movieIdClicked);

  console.log(movieById);

  if (loading) return <Loader loading={loading} />;
  if (movieIdClicked && movieById)
    return (
      <>
        {isModalMovieOpen && (
          <>
            <ReactPortal containerId="modal-root">
              <Overlay>
                <ModalWindow>
                  <BtnIconClose>
                    <IconClose src={imgClose} onClick={handleClickCloseModal} />
                  </BtnIconClose>
                  <ModalWithOverflow>
                    <ContainerImage>
                      <ImageMovie
                        src={movieById.Poster.replace("300", "1900")}
                      />
                    </ContainerImage>

                    <ContainerInfo>
                      <TitleMovie>{movieById.Title}</TitleMovie>
                      <Description>{movieById.Plot}</Description>
                      <GenreText>{movieById.Genre}</GenreText>
                      <Info>
                        <ImgIcon src={iconRating} />
                        <TextInfo>
                          Rating in{" "}
                          <strong>${movieById.Ratings[0].Value}</strong>
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
                          movieById.BoxOffice
                            ? movieById.BoxOffice
                            : "profit unknown"
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
                        <ImgIcon src={iconWriter} />
                        <TextInfo>{`Writer: ${movieById.Writer}`}</TextInfo>
                      </Info>
                    </ContainerInfo>
                  </ModalWithOverflow>
                </ModalWindow>
              </Overlay>
            </ReactPortal>
          </>
        )}
      </>
    );
};

export default Modal;
