
import {  Route, Routes } from 'react-router-dom';

import {Page} from '../components/Page';
import {NotFound} from '../components/NotFound';
//import {Archive} from '../components/Archive';
/* import Single from '../components/Single';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register'; */

//comprobate if slug exist



export const  AppRouter= () => {


   

  return (
    <Routes>
      <Route path="/" element={<Page isHome/>} />
      <Route path="/:slug" element={<Page />}/>  
    
    </Routes>  
  )
}



