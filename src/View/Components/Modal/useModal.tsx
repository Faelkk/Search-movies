import { useState } from "react";

export function useModal() {
  const [isModalMovieOpen, setisModalMovieOpen] = useState(false);

  const handleClickOpenModal = () => {
    setisModalMovieOpen(true);
  };
  const handleClickCloseModal = () => {
    setisModalMovieOpen(false);
  };

  return { isModalMovieOpen, handleClickCloseModal, handleClickOpenModal };
}
