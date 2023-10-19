import { TitleError, ImgError, Container } from "./style";

import iconError from "../../../../assets/404 Error-rafiki.svg";

const MovieError = () => {
  return (
    <Container>
      <TitleError>Filme não encontrado tente novamente</TitleError>
      <ImgError src={iconError} alt="Imagem filme não encontrado" />
    </Container>
  );
};

export default MovieError;
