import Input from "./components/Input/Input";
import { Container, HeaderCenter, TitlePage } from "./style";

const Header = () => {
  return (
    <Container>
      <HeaderCenter>
        <TitlePage>Movies Tracker</TitlePage>
        <Input />
      </HeaderCenter>
    </Container>
  );
};

export default Header;
