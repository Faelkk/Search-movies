import React from "react";
import {
  ContainerModal,
  ModalWindow,
  ContainerImg,
  ImgModal,
  ContainerInformations,
  TitleModal,
  LancamentoSpan,
  RatingMovie,
  ReceitaModal,
  DuracaoModal,
  CloseIcon,
} from "./style";
import closeImg from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";

interface ModalProps {
  movieById: any;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ movieById, closeModal }) => {
  return (
    <ContainerModal>
      <ModalWindow>
        <ContainerImg>
          <ImgModal
            src={
              movieById && movieById.Poster
                ? movieById.Poster.replace("300", "1900")
                : ""
            }
          />
        </ContainerImg>
        <ContainerInformations>
          <TitleModal>{movieById && movieById.Title}</TitleModal>
          <LancamentoSpan>
            Lançamento: {movieById && movieById.Released}
          </LancamentoSpan>
          <RatingMovie>
            Avaliação: {movieById && movieById.imdbRating}
          </RatingMovie>
          <ReceitaModal>
            Receita:{" "}
            {movieById && movieById.BoxOffice
              ? movieById.BoxOffice.replace("$", "")
              : ""}{" "}
            R$
          </ReceitaModal>
          <DuracaoModal>Duração: {movieById && movieById.Runtime}</DuracaoModal>
        </ContainerInformations>
        <CloseIcon src={closeImg} onClick={closeModal} />
      </ModalWindow>
    </ContainerModal>
  );
};

export default Modal;
