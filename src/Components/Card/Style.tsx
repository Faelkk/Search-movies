import styled from "styled-components";

export const ContainerCards = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;
  box-shadow: 0 3px 10px 0 #aaa;
  padding: 5px;
  height: 450px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NameMovie = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;

export const ImgCard = styled.img<{ coluns?: boolean }>`
  border-radius: 3px;
  height: ${({ coluns }) => (coluns ? "auto" : "400px")};
  object-fit: cover;
  max-height: 400px;
  object-position: center;
  width: 100%;
  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

export const Year = styled.span``;

export const AboutCard = styled.span`
  font-family: "Roboto", sans-serif;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
`;
