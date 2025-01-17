import { Route, Routes } from 'react-router-dom';

import { Page } from '../components/Page';
//import {NotFound} from '../components/NotFound';
import { SingleProduct } from '../components/SingleProduct';
import { Archive } from '../components/Archive';
import { SinglePost } from '../components/SinglePost';
/* import Single from '../components/Single';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register'; */

//comprobate if slug exist

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Page isHome />} />
      <Route path='/:slug' element={<Page />} />
      <Route path='/product/:slug' element={<SingleProduct />} />
      <Route path='/blog/' element={<Archive />} />
      <Route path='/blog/:slug' element={<SinglePost />} />
    </Routes>
  );
};
