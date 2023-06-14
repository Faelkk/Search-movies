import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  background: #0c4369;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  transition: .3s;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: .1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    background: #1788cf;
  }
`;


const ButtonSearch = () => {
  return <Button>Pesquisar</Button>;
};

export default ButtonSearch;
