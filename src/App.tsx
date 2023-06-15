import HeaderApp from "./Components/Header.tsx";
import SearchMovie from "./Components/SearchMovie.tsx";
import FooterSearch from "./Components/Footer.tsx";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  min-height: 100%;
  position: relative;
`;
const App = () => {
  return (
    <>
      <Container>
        <HeaderApp />
        <SearchMovie />
      </Container>
      <FooterSearch />
    </>
  );
};

export default App;
