import React from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import aboutImage from "../assets/AboutImage.png"

function About() {
  return (
//     <div className="bg-white py-16">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
//       {/* Text Section */}
//       <div className="lg:w-3/5 lg:text-left mb-8 lg:mb-0 flex flex-col px-6 lg:px-0">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           About the SWOT Test
//         </h2>
//         <p className="text-gray-700 mb-6">
//           Our psychometric tests are designed to help you understand yourself better. The test asks questions about your skills and interests based on <strong>SWOT (Strengths, Weaknesses, Opportunities, Threats)</strong> Analysis.
//         </p>
//         <p className="text-gray-700 mb-6">
//           There are no right or wrong answers—just be honest! These tests provide insights into different aspects of yourself, helping you explore potential career paths based on your unique traits and preferences.
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>This Questionnaire contains 19 Questions</li>
//           <li>You will need approximately 15 Minutes to complete</li>
//           <li>
//             <strong>Please answer honestly as possible. There are no Correct or Wrong Answers</strong>
//           </li>
//         </ul>
//         <Link to="/assessment">
//           <Buttons text="Begin Assessment" />
//         </Link>
//       </div>

//       {/* Image Section */}
//       <div className="lg:w-2/5">
//         <img
//           src={aboutImage}
//           alt="Illustration for the SWOT Test"
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   </div>
<div>
    
    <div className="lg:w-full  lg:text-left mb-6 lg:mb-0 flex flex-col p-10 mt-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-12">
          About the SWOT Test
        </h1>
        <p className="text-gray-700 mb-6">
          Our psychometric tests are designed to help you understand yourself better. The test asks questions about your skills and interests based on <strong>SWOT (Strengths, Weaknesses, Opportunities, Threats)</strong> Analysis.
        </p>
        <p className="text-gray-700 mb-6">
          There are no right or wrong answers—just be honest! These tests provide insights into different aspects of yourself, helping you explore potential career paths based on your unique traits and preferences.
        </p>
    </div>
    <div className='flex max-w-full mx-auto justify-between '>
        <div className=' ml-10  lg:w-3/5 flex flex-col items-start p-2'>
        <ul className="text-left list-disc   text-gray-700 mb-6 space-y-3">
         <li>This Questionnaire contains 19 Questions</li>
         <li>You will need approximately 15 Minutes to complete</li>
         <li>
           <strong>Please answer honestly as possible. There are no Correct or Wrong Answers</strong>
         </li>
       </ul>
       <Link to="/Questions">
         <Buttons text="Begin Assessment" />
       </Link>
     </div>
        
        <div className='lg:w-1/4 float-end '>
            <img src={aboutImage} alt="AboutImage" />
        </div>
    </div>
</div>
  )
}

export default About
