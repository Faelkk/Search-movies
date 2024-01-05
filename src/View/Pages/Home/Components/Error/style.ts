import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
export const TitleError = styled.h2`
  color: #000;
  font-size:1.5rem;

  @media(max-width:600px) {
  font-size:1.3rem;

  @media(max-width:375px) {
    font-size:1rem;
  }
}
  
`;
export const ImgError = styled.img`
  width: 600px;
`;

export const NameNotFound  = styled.h2`
color:#396ebd;
font-size:1.5rem;
overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px; 
  white-space: nowrap; 

@media(max-width:800px) {
  font-size:1.3rem;
  max-width: 300px; 
  
}   
@media(max-width:375px) {
    font-size:1rem;
  }

`
export const ContainerTitle = styled.div`
display:flex; 
gap: 0.5rem;

@media(max-width:850px) {
  flex-direction:column;
  gap:0;
  align-items:center;
}


`