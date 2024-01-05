import { useState } from "react";
import { useInputContext } from "../../../../../../../App/Context/useInputContext";


function useInput() {
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

    return {inputSearchValue,setInputSearchValue,isInputDisabled,handleInputChange,handleSubmitForm}
}
export default useInput