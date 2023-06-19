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
const ContainerMovies = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
`;
const ContainerInput = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchMovie = () => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSearchValue(value: string) {
    setSearchValue(value);
  }

  return (
    <Section className="container-content">
      <Content className="content">
        <ContainerInput className="container-search">
          <InputSearch
            type="text"
            label="Pesquise algum filme:"
            id="search"
            autoComplete="off"
            required
            onSearch={handleSearchValue}
          />
        </ContainerInput>
        {searchValue && (
          <ContainerMovies className="Container-movies">
            <CreateCard searchValue={searchValue} />
          </ContainerMovies>
        )}
      </Content>
    </Section>
  );
};
export default SearchMovie;
