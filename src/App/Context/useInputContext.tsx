import { createContext, useState, useContext, FC, ReactNode } from "react";

const InputContext = createContext<
  | {
      inputValue: string;
      isInputDisabled: boolean;
      handleSubmit: (value: string) => void;
      setInputDisabled: (disabled: boolean) => void;
      setInputValue: (value: string) => void;
    }
  | undefined
>(undefined);

interface InputProviderProps {
  children: ReactNode;
}

const InputProvider: FC<InputProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputDisabled, setInputDisabled] = useState(false);

  const handleSubmit = (value: string) => {
    setInputValue(value);
  };

  return (
    <InputContext.Provider
      value={{
        inputValue,
        isInputDisabled,
        setInputValue,
        handleSubmit,
        setInputDisabled,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within an InputProvider");
  }
  return context;
};

export { InputProvider, useInputContext };
