import "../View/Style/style.css";
import Home from "../View/Pages/Home/Home";
import { InputProvider } from "./Context/useInputContext";

const App = () => {
  return (
    <InputProvider>
      {" "}
      <Home />{" "}
    </InputProvider>
  );
};

export default App;
