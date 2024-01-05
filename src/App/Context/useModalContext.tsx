import { FC, ReactNode, createContext, useContext, useState } from "react";

interface ModalContextProps {
  isModalMovieOpen: boolean;
  handleClickOpenModal: () => void;
  handleClickCloseModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalMovieOpen, setIsModalMovieOpen] = useState(false);

  const handleClickOpenModal = () => {
    setIsModalMovieOpen(true);
  };

  const handleClickCloseModal = () => {
    setIsModalMovieOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalMovieOpen, handleClickOpenModal, handleClickCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};

export { useModalContext, ModalProvider };
