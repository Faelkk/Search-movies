import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background: #000;
  justify-content: center;
  padding: 10px 0 10px;
`;

const H1 = styled.h1`
  color: #fff;
  font-family: "IBM Plex Mono", monospace;
  font-size: 1.2rem;
`;

const HeaderApp = () => {
  return (
    <Header>
      <H1>Search app</H1>
    </Header>
  );
};

export default HeaderApp;
