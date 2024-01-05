import styled from "styled-components";



export const Form = styled.form`

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding-left: 0.75rem;
  height: 52px;
  color: #333;
  width: 100%;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 6px 20px;
  width: 100%;
  

  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const InputSearch = styled.input`
  border: none;
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
`;
