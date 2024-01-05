import { BrowserRouter } from "react-router-dom";
import "../Style/style.css";

import Routes from "../View/Routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
