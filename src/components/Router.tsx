import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import CarDetail from "./screens/car-detail/CarDetail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />

        <Route element={<h1>Not found</h1>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
