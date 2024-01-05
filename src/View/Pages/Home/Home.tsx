import MoviesContent from "./Components/MoviesContent/MoviesContent";
import MoviesNoContent from "./Components/MoviesNoContent/MoviesNoContent";

import Header from "./Components/Header/Header";
import { useInputContext } from "../../../App/Context/useInputContext";

const Home = () => {
  const { inputValue } = useInputContext();

  return (
    <>
      <Header />

      {inputValue ? <MoviesContent /> : <MoviesNoContent />}
    </>
  );
};

export default Home;
