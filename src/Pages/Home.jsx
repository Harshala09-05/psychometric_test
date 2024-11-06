import React from 'react'
import NavBar from '../Components/NavBar';
import Content from '../Components/Content';
import About from '../Components/About';
import Questions from '../Components/Questions';
import SubmitForm from '../Components/SubmitForm';
import Table from '../Components/Table';
import { Outlet, useLocation } from 'react-router-dom';
import Report from '../Components/Report';
import ReportTemplate from '../Components/ReportTemplate';



function Home() {
  const userData = {
    userName: 'Sreekrishnan K',
    testDate: '07 June 2024',
    strengths: ['Leadership', 'Problem-solving', 'Communication'],
    weaknesses: ['Time management', 'Public speaking'],
    opportunities: ['Networking events', 'Skill development workshops'],
    threats: ['Market competition', 'Economic downturn'],
  };

  const profileDescription = "The candidate demonstrates empathy by showing genuine concern for others' feelings and experiences. They have a natural ability to listen attentively, understand different perspectives, and offer support and comfort when needed. This trait allows them to build meaningful relationships and contribute positively to the community.";
  
  const careerFields = [
    "Psychology",
    "Doctor and other paramedical fields",
    "Biotechnology"
  ];
  const location = useLocation();
  return (
    <div>
      <ReportTemplate {...userData}{...profileDescription} {...careerFields} />
       {/* <NavBar/>
      {
        location.pathname === '/' && (
          <Content/>
        )
          
      } */}
      {/* <Report/> */}
      {/* <SubmitForm/>  */}
      {/* <Table/> */}
      <Outlet/>
    </div>
  )
}

export default Home;
