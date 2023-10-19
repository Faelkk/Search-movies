import { LoadingContainer, LoadingTitle, ProgressBar, Bar } from "./style";

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingTitle>Buscando filmes..</LoadingTitle>
      <ProgressBar>
        <Bar></Bar>
      </ProgressBar>
    </LoadingContainer>
  );
};
