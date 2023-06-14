import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  background: #000;
  padding: 10px 0 10px;
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
