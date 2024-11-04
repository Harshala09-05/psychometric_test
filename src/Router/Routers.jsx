import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Home from '../Pages/Home';


function Routers() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default Routers;
