import React from 'react'
import NavBar from '../Components/NavBar';
import Content from '../Components/Content';
import About from '../Components/About';
import Questions from '../Components/Questions';
import SubmitForm from '../Components/SubmitForm';
import Table from '../Components/Table';
import { Outlet, useLocation } from 'react-router-dom';



function Home() {
  const location = useLocation();
  return (
    <div>
       <NavBar/>
      {
        location.pathname === '/' && (
          <Content/>
        )
      }
      {/* <SubmitForm/>  */}
      {/* <Table/> */}
      <Outlet/>
    </div>
  )
}

export default Home;
