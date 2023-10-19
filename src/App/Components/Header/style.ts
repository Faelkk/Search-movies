import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 80%;
  position: relative;
  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TitlePage = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.2px;
  font-weight: bold;
  @media (max-width: 950px) {
    margin-bottom: 1rem;
  }
`;

export const IconBackToHome = styled.img``;

export const ContainerBackHome = styled.div`
  @media (max-width: 950px) {
    position: relative;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 5px;
`;

export const SpanBack = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
