import { ButtonSubmit, Form, InputSearch } from "./style";

import submitIcon from "../../../../../../../assets/search_FILL0_wght400_GRAD0_opsz24.svg";

import useInput from "./useInput";

const Input = () => {
  const {
    inputRef,
    inputSearchValue,
    isInputDisabled,
    handleInputChange,
    handleSubmitForm,
    handleFormClick,
  } = useInput();

  return (
    <Form onClick={handleFormClick} onSubmit={handleSubmitForm}>
      <InputSearch
        type="text"
        placeholder="Search for a movie or series."
        required
        value={inputSearchValue}
        onChange={handleInputChange}
        disabled={isInputDisabled}
        ref={inputRef}
      />
      <ButtonSubmit type="submit">
        <img src={submitIcon} alt="Submit" />
      </ButtonSubmit>
    </Form>
  );
};

export default Input;
