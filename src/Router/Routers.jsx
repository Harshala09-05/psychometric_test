import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Content from '../Components/Content';
import About from '../Components/About';
import Table from '../Components/Table';
import Questions from '../Components/Questions';
import SubmitForm from '../Components/SubmitForm';
import ReportTemplate from '../Components/ReportTemplate';


function Routers() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}>
           <Route path='/content' element={<Content/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/questions' element={<Questions/>}/>
           <Route path='/submit' element={<SubmitForm/>}/>
           <Route path='/table' element={<Table/>}/>
           <Route path='/thankyou' element={<Content/>}/>

        </Route>
        <Route path='/template' element={ReportTemplate}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default Routers;
