import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const PageCenter = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  width: 80%;
  gap: 2rem;
  max-height: 530px;

  @media (max-width: 1400px) {
    max-height: 100%;
  }

  @media (max-width: 1050px) {
    width: 90%;
    gap: 1rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0px;
    max-height: 100%;
    background: #fff;
    padding: 10px;
  }
`;

export const ContainerInfo = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 3px;

  @media (max-width: 720px) {
    background: none;
  }
`;
export const ContainerImage = styled.div`
  max-height: 100%;
  @media (max-width: 720px) {
    height: 400px;
  }
`;
export const ImgMovie = styled.img`
  width: 100%;
  border-radius: 3px;
  height: 100%;
  object-fit: cover;
`;
export const TitleMovie = styled.h1`
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: bold;
`;
export const Info = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ImgIcon = styled.img`
  width: 30px;
`;

export const TextInfo = styled.span`
  font-size: 0.9rem;
`;

export const FilMadeBy = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const GenreText = styled.span`
  margin-top: 1rem;
  color: #363837;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;
