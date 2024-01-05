import styled from "styled-components";

export const MoviesCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 1rem;
  gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  min-width: 240px;
  max-width: 240px;
  cursor: pointer;
  

  .linkCard {
    width: 100%;
  }
`;

export const TitleCard = styled.h2`
  font-size: 1.2rem;
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const BtnModal = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0.5rem;
  background: #333;
  color: #fff;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
`;
