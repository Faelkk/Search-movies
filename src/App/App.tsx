import { BrowserRouter } from "react-router-dom";
import "../Style/style.css";

import Routes from "./Routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
