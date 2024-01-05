import { useState } from "react";

export function useHome() {
    
  const [isModalMovieOpen, setIsModalMovieOpen] = useState(false);

  const handleClickOpenModal = () => {
    setIsModalMovieOpen(true);
  };

  const handleClickCloseModal = () => {
    setIsModalMovieOpen(false);
  };

  return {isModalMovieOpen,handleClickCloseModal,handleClickOpenModal}
}