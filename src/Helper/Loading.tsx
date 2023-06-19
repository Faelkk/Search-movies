import styled from "styled-components";
import imgLoading from "../assets/Reload-1s-200px.gif";

const GifLoading = styled.img`
  height: 80px;
`;
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <ContainerLoading>
      <GifLoading src={imgLoading} />
    </ContainerLoading>
  );
};

export default Loading;
