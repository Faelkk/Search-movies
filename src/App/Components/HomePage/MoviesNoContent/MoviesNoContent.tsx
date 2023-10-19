import { useState, useEffect } from "react";
import { Container, ImgIcon, TitleHome } from "./style";

import searchIconHome from "../../../../assets/Web search-pana.svg";
import Spinner from "../../../utils/Spinner";

const MoviesNoContent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = searchIconHome;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <Container>
      <TitleHome>Pesquise algum filme</TitleHome>
      {imageLoaded ? <ImgIcon src={searchIconHome} /> : <Spinner />}
    </Container>
  );
};

export default MoviesNoContent;
