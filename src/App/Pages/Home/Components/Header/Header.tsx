import Input from "../Input/Input";
import { Container, TitlePage } from "./style";

const Header = () => {
  return (
    <Container>
      <TitlePage>Movies Tracker</TitlePage>
      <Input />;
    </Container>
  );
};

export default Header;
