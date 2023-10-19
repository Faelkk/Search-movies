import styled from "styled-components";

export const LoadingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  padding: 0 6rem;
  background: transparent;
  opacity: 0;
  transform: translateX(-20px);
  animation: fade 0.5s forwards;

  @keyframes fade {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const LoadingTitle = styled.h2`
  color: 333;
  text-align: center;
`;

export const ProgressBar = styled.div`
  height: 8px;
  width: 30rem;
  max-width: 100%;
  margin-top: 2rem;
`;

export const Bar = styled.div`
  height: 3px;
  width: 0;
  background: #4a81cd;
  animation: load 0.5s forwards;

  @keyframes load {
    to {
      width: 100%;
    }
  }
`;
