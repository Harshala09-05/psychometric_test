import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Content from '../Components/Content';
import About from '../Components/About';
import Table from '../Components/Table';
import Questions from '../Components/Questions';
import SubmitForm from '../Components/SubmitForm';


function Routers() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}>
           <Route path='/Content' element={<Content/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Questions' element={<Questions/>}/>
           <Route path='/submit' element={<SubmitForm/>}/>
           <Route path='/Table' element={<Table/>}/>
           <Route path='/thankyou' element={<Content/>}/>

        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default Routers;
