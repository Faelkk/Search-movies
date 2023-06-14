import React from "react";
import styled from "styled-components";
import InputSearch from "../Input/Input";
import CreateCard from "./CreateCard";

const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 15px 0 15px;
`;

const Content = styled.div``;

const Div = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchMovie = () => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <Section className="container-content">
      <Content className="content">
        <Div className="container-search">
          <InputSearch
            type="text"
            label="Pesquise algum filme:"
            id="search"
            autoComplete="off"
            required
            onSearch={handleSearchValue} // Adicione essa prop para atualizar o valor de pesquisa
          />
        </Div>
        {searchValue && ( // Renderize o CreateCard somente se houver um valor de pesquisa
          <Div className="Container-movies">
            <CreateCard searchValue={searchValue} />
          </Div>
        )}
      </Content>
    </Section>
  );
};
export default SearchMovie;
