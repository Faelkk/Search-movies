import styled from "styled-components";
import { propsPaginate } from "../Types/types";
const Btn = styled.button`
  background: #0c4369;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    background: #1788cf;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  z-index: 2;
  justify-content: center;
  padding-bottom: 5vh;
`;

const Paginacao = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
}: propsPaginate) => {
  const pageNumbers = Math.ceil(totalMovies / moviesPerPage);

  return (
    <ContainerButtons>
      {pageNumbers > 1 && currentPage > 1 && (
        <Btn onClick={() => paginate(currentPage - 1)}>Previous Page</Btn>
      )}
      {pageNumbers > 1 && currentPage < pageNumbers && (
        <Btn onClick={() => paginate(currentPage + 1)}>Next Page</Btn>
      )}
    </ContainerButtons>
  );
};

export default Paginacao;
