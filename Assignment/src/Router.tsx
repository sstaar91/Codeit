import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Landing from './pages/Landing';
import Folder from './pages/Folder';
import Share from './pages/Share';
import Privacy from './pages/Privacy';
import Faq from './pages/Faq';
import User from './pages/User';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="share" element={<Share />} />
          <Route path="folder" element={<Folder />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="/signin" element={<User />} />
        <Route path="/signup" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
