import { useRef, useState } from "react";
import { useInputContext } from "../../../../../../../App/Context/useInputContext";


function useInput() {
    const [inputSearchValue, setInputSearchValue] = useState("");
    const { isInputDisabled, handleSubmit } = useInputContext();
    const inputRef = useRef<HTMLInputElement>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputSearchValue(e.target.value);
    };
  
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(inputSearchValue);
      setInputSearchValue("");
    };

    const handleFormClick = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    return {inputRef,inputSearchValue,setInputSearchValue,isInputDisabled,handleInputChange,handleSubmitForm,handleFormClick}
}
export default useInput