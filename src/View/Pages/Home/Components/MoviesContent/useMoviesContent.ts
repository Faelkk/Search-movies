import { useState } from "react";
import { useInputContext } from "../../../../../App/Context/useInputContext";
import useFetchMoviesBySearch from "../../../../../App/Hooks/useFetchMovies";
import { useModal } from "../../../../Components/Modal/useModal";

export function useMoviesContent() {
    const { inputValue, setInputDisabled } = useInputContext();
  const { moviesBySearch, loading, error } = useFetchMoviesBySearch(inputValue);
  const [movieByIdClicked, setMovieByIdClicked] = useState("");
    const {isModalMovieOpen,handleClickCloseModal,handleClickOpenModal} = useModal() 

  function onClickCard(movieClickedId: string) {
    setMovieByIdClicked(movieClickedId);
    
    handleClickOpenModal();
  }

  return {moviesBySearch,error,loading,movieByIdClicked,isModalMovieOpen,onClickCard,setInputDisabled,handleClickCloseModal}
}

export default useMoviesContent