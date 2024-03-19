import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@_page/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
