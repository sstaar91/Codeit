import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "@_component/Nav";
import Main from "@_page/Main";
import UserForm from "@_page/UserForm";
import MyPage from "@_page/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<UserForm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
