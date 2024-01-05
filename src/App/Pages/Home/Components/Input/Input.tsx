import { useState } from "react";
import { ButtonSubmit, Container, Form, InputSearch } from "./style";

import submitIcon from "../../../../../assets/search_FILL0_wght400_GRAD0_opsz24.svg";

interface inputProps {
  onSubmit: (value: string) => void;
  isInputDisabled: boolean;
}

const Input = ({ isInputDisabled, onSubmit }: inputProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <InputSearch
          type="text"
          placeholder="Pesquise um filme"
          value={searchValue}
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
