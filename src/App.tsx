import HeaderApp from "./Components/Header/Header.tsx";
import SearchMovie from "./Components/MovieSection/SearchMovie.tsx";
import FooterSearch from "./Components/Footer/Footer.tsx";
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
