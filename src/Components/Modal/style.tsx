import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
  @media (max-width: 768px) {
    align-items: start;
  }
`;
export const ModalWindow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 5px 5px;
  border-radius: 2px;
  background: #f4eded;
  width: 700px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: auto;
    margin-top: 1rem;
  }
`;
export const ContainerImg = styled.div``;
export const ContainerInformations = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgModal = styled.img`
  border-radius: 3px;
  width: 250px;
`;
export const TitleModal = styled.h2`
  width: 30ch;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 30ch;
    font-weight: bold;
  }
`;
export const LancamentoSpan = styled.span`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const RatingMovie = styled.span`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const ReceitaModal = styled.span`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const DuracaoModal = styled.span`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const CloseIcon = styled.img`
  position: absolute;
  top: 0;
  right: 2px;
  width: 40px;
  cursor: pointer;
`;
