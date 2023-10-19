import { Link, useLocation } from "react-router-dom";
import {
  Container,
  ContainerBackHome,
  HeaderCenter,
  IconBackToHome,
  SpanBack,
  TitlePage,
} from "./style";

import arrowBack from "../../../assets/arrow_back_FILL0_wght400_GRAD0_opsz24.svg";

const Header = () => {
  const { pathname } = useLocation();
  const isInHome = pathname === "/" ? true : false;

  return (
    <Container>
      <HeaderCenter>
        <TitlePage>
          <Link to="/">Movies Tracker</Link>
        </TitlePage>

        {!isInHome ? (
          <ContainerBackHome>
            <Link to="/">
              <SpanBack>
                {" "}
                <IconBackToHome src={arrowBack} />
                Voltar para a pagina inicial
              </SpanBack>
            </Link>
          </ContainerBackHome>
        ) : null}
      </HeaderCenter>
    </Container>
  );
};

export default Header;
