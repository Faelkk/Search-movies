import React from 'react';
import styled from 'styled-components';
import InputSearch from '../Input/Input';


const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 15px 0 15px;
`;

const Content = styled.div`
  display: flex;

 
`;

const Div = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchMovie = () => {
  return (
    <Section className="container-content">
      <Content className="content">
        <Div className="container-search">
          <InputSearch
            type="text"
            label="Pesquise algum filme:"
            id="search"
            autoComplete="off"
          />
        </Div>
        <Div className="Container-movies"></Div>
      </Content>
    </Section>
  );
};

export default SearchMovie;