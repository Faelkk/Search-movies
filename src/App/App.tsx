import { BrowserRouter } from "react-router-dom";
import "../Style/style.css";

import Routes from "./Routes/routes";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
