import { Container, TitleHome } from "./style";

import SkeletonImage from "../../../../Components/Skeleton/Skeleton";
import searchIconHome from "../../../../../assets/Web search-pana.svg";

const MoviesNoContent = () => {
  return (
    <Container>
      <TitleHome>Search for a movie or series.</TitleHome>

      <SkeletonImage
        src={searchIconHome}
        alt="icon search a movie"
        className="home"
      />
    </Container>
  );
};

export default MoviesNoContent;
