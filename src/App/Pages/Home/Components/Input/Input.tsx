import { ButtonSubmit, Container, Form, InputSearch } from "./style";

import submitIcon from "../../../../../assets/search_FILL0_wght400_GRAD0_opsz24.svg";
import { useInputContext } from "../../../../Context/useInputContext";

const Input = () => {
  const { inputValue, isInputDisabled, handleSubmit, setInputValue } =
    useInputContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <InputSearch
          type="text"
          placeholder="Pesquise um filme"
          value={inputValue}
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
