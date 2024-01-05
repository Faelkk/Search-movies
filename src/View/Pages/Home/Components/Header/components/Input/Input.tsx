import { ButtonSubmit, Form, InputSearch } from "./style";

import submitIcon from "../../../../../../../assets/search_FILL0_wght400_GRAD0_opsz24.svg";

import useInput from "./useInput";

const Input = () => {
  const {
    inputSearchValue,
    isInputDisabled,
    handleInputChange,
    handleSubmitForm,
  } = useInput();

  return (
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
  );
};

export default Input;
