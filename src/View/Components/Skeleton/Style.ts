import styled from "styled-components";

export const Wrapper = styled.div`
&.home {
  display:grid;
  margin-top:1rem;
  height:600px;
  
}

  &.card{
    display: grid;
  width: 200px;
  height: 300px;
  border-radius: 4px;
  }
`;

export const Img = styled.img`

&.home {
  width:600px;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
}

&.card{
  width: 200px;
  height: 300px;
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
}
`;

export const SkeletonDiv = styled.div`


  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;



  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
