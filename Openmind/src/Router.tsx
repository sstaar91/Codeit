import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import List from './pages/List';
import Post from './pages/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
