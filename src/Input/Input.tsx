import React, { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface InputSearchProps {
  type: string;
  label: string;
  id: string;
  autoComplete: string;
  required?: boolean;
  onSearch: (value: string) => void;
}

const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-family: Helvetica, Arial;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  border: 1px solid #eee;
  border-radius: 3px;
  background: #eee;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background: #0c4369;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  transition: 0.3s;
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0.1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    background: #1788cf;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputSearch = (props: InputSearchProps) => {
  const [searchValue, setSearch] = React.useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typeof props.onSearch === "function") {
      // Verifique se onSearch é uma função antes de chamá-la
      props.onSearch(searchValue); // Chame a função onSearch com o valor de pesquisa
    }
  }

  return (
    <>
      <Form className="FormSearch" onSubmit={handleSubmit}>
        <ContainerInput>
          <Label htmlFor={props.id}>{props.label}</Label>
          <Input
            type={props.type}
            id={props.id}
            name={props.id}
            autoComplete={props.autoComplete}
            value={searchValue}
            onChange={handleChange}
            required
          />
        </ContainerInput>
        <Button type="submit">Pesquisar</Button>
      </Form>
    </>
  );
};

export default InputSearch;
