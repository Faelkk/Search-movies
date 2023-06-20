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
`;
export const ModalWindow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 5px 5px;
  border-radius: 2px;
  background: #f4eded;
  width: 700px;
  position: relative;
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
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;
export const LancamentoSpan = styled.span``;
export const RatingMovie = styled.span``;
export const ReceitaModal = styled.span``;
export const DuracaoModal = styled.span``;
export const CloseIcon = styled.img`
  position: absolute;
  top: 0;
  right: 2px;
  width: 40px;
  cursor: pointer;
`;
