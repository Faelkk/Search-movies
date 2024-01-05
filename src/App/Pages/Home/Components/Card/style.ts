import styled from "styled-components";

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
