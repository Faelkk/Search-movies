import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageMovie from "../Pages/PageMovie/PageMovie";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:idMovie" element={<PageMovie />} />
    </Routes>
  );
};

export default routes;
