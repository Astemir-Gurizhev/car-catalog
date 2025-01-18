import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<h1>Not found</h1>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
