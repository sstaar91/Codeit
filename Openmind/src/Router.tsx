import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Post from './pages/Post';
import Answer from './pages/Answer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
