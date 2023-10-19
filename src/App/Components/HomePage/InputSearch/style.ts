import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 6px 20px;
  width: 40%;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const Input = styled.input`
  border: none;
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
`;
