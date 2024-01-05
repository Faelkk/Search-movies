import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageMovie from "../Pages/PageMovie/PageMovie";
import { InputProvider } from "../Context/useInputContext";

const routes = () => {
  return (
    <InputProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:idMovie" element={<PageMovie />} />
      </Routes>
    </InputProvider>
  );
};

export default routes;
