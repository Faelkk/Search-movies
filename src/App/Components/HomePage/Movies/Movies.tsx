import MoviesNoContent from "../MoviesNoContent/MoviesNoContent";

import MoviesContent from "../MoviesContent/MoviesContent";
import { useState } from "react";
import InputSearch from "../InputSearch/InputSearch";

const Movies = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      <InputSearch onSubmit={handleSubmit} isInputDisabled={isInputDisabled} />
      {inputValue ? (
        <MoviesContent
          searchValue={inputValue}
          setInputDisabled={setInputDisabled}
        />
      ) : (
        <MoviesNoContent />
      )}
    </>
  );
};

export default Movies;
