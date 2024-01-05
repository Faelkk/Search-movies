import { ButtonSubmit, Container, Form, InputSearch } from "./style";

import submitIcon from "../../../../../assets/search_FILL0_wght400_GRAD0_opsz24.svg";

import { useState } from "react";
import { useInputContext } from "../../../../../App/Context/useInputContext";

const Input = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const { isInputDisabled, handleSubmit } = useInputContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(inputSearchValue);
    setInputSearchValue("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <InputSearch
          type="text"
          placeholder="Pesquise um filme"
          value={inputSearchValue}
          onChange={handleInputChange}
          disabled={isInputDisabled}
        />
        <ButtonSubmit type="submit">
          <img src={submitIcon} alt="Submit" />
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default Input;
