import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
  width: 100%;
  background: #000;
  padding: 5px 0 5px 0px;
  position: fixed;
  bottom: 0;
`;
const Span = styled.span`
  color: #fff;
  font-family: "IBM Plex Mono", monospace;
  font-weight: bold;
  font-size: 1.2rem;
`;
const FooterSearch = () => {
  return (
    <Footer>
      <Span>Direitos reservados por Rafael</Span>
    </Footer>
  );
};

export default FooterSearch;
