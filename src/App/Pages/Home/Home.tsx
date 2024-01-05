import { useState } from "react";

import MoviesContent from "./Components/MoviesContent/MoviesContent";
import MoviesNoContent from "./Components/MoviesNoContent/MoviesNoContent";
import Input from "./Components/Input/Input";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      <Input onSubmit={handleSubmit} isInputDisabled={isInputDisabled} />
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

export default Home;
