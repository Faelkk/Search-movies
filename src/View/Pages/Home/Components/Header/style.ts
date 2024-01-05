import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content:center;
  padding:1rem;
`;

export const HeaderCenter = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
gap:2rem;
width:30%;

@media (max-width:900px) {
  width:100%;
}
`

export const TitlePage = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.2px;
  font-weight: bold;
  @media (max-width: 950px) {
    margin-bottom: 1rem;
  }
`;

