import styled from "styled-components";

export  const Overlay = styled.div`
width: 100%;
height: 100%;
position: fixed;
inset:0;
background: rgb(141 141 141 / 80%);
display: flex;
align-items: center;
justify-content: center;
backdrop-filter: blur(5px); 
`;




export const ModalWindow = styled.div`
  background: #eee;
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  max-width: 1200px;
  gap: 1rem;
  position: relative;
  z-index: 1; /* Adicione z-index ao ModalWindow */

  @media (max-width: 1250px) {
    max-width: 900px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 80%;
    height: 90%;
   
  }
`;

export const ModalWithOverflow = styled.div`
display:flex;

@media(max-width:900px) {
    flex-direction:column;
    overflow-y: auto;
    overflow-x: hidden;
}
`



export const ContainerImage = styled.div`
height:600px;
object-fit:contain;

@media(max-width:900px) {
  height:600px;
  width:100%;
}


`
export const ImageMovie = styled.img`
height:100%;
border-radius:4px;
width:100%;
object-fit:cover;
`


export const ContainerInfo = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 3px;
  width: 60%;
  background: transparent;
  position: relative;
  z-index: 2; /* Adicione z-index ao ContainerInfo */

  @media (max-width: 900px) {
    width: 100%;
  }
`;


export const TitleMovie = styled.h1`
  margin-top: 0.5rem;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: .9rem;
  margin-top: 1rem;
  font-weight: bold;
`

export const movieGenre = styled.span`
 margin-top: 1rem;
  color: #363837;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`


export const Info = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ImgIcon = styled.img`
  width: 30px;
`;

export const TextInfo = styled.span`
  font-size: 0.9rem;
`;



export const GenreText = styled.span`
  margin-top: 1rem;
  color: #363837;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const BtnIconClose = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  background: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 6px;
  cursor: pointer;
  z-index: 3; /* Aumente o z-index para garantir que o botão esteja acima de tudo */

  @media (max-width: 900px) {
    right: auto;
    left: -12px;
    top: -12px;
  }
`;


export const IconClose = styled.img`
  height: 24px;
  width: 24px;
`;
