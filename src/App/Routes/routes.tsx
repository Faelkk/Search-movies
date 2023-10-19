import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

import MovieByIdPage from "../Pages/MovieByIdPage";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:idMovie" element={<MovieByIdPage />} />
    </Routes>
  );
};

export default routes;
