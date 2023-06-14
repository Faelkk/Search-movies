import HeaderApp from "./Components/Header.tsx";
import SearchMovie from "./Components/SearchMovie.tsx";
import FooterSearch from "./Components/Footer.tsx";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;
function App() {
  return (
    <Container>
      <HeaderApp />
      <SearchMovie />
      <FooterSearch />
    </Container>
  );
}

export default App;
