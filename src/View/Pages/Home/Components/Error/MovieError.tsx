import {
  TitleError,
  ImgError,
  Container,
  NameNotFound,
  ContainerTitle,
} from "./style";

import iconError from "../../../../../assets/404 Error-rafiki.svg";
import { useInputContext } from "../../../../../App/Context/useInputContext";

const MovieError = () => {
  const { inputValue } = useInputContext();
  return (
    <Container>
      <ContainerTitle>
        <TitleError>We don't find any search results for</TitleError>
        <NameNotFound>{inputValue}</NameNotFound>
      </ContainerTitle>
      <TitleError>Try again</TitleError>
      <ImgError src={iconError} alt="Imagem filme não encontrado" />
    </Container>
  );
};

export default MovieError;
