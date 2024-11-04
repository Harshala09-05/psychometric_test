import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import contentImage from "../assets/contentImage.png"
import Buttons from './Buttons'

function Content() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleTakeTestClick = () => {
    navigate('/about'); // Navigate to About page
  };

  return (
    <div className="bg-white py-16 ">
      <div className="max-w-ful  mx-auto h-96 px-4 sm:px-6 lg:px-8 flex place-items-start ">
        {!location.pathname.includes("/thankyou") && (

        <div className="lg:w-3/5  lg:text-left py-32 px-4 lg:mb-0 flex flex-col ">
          <h1 className="text-3xl font-bold text-gray-800 ">
            Discover Your Career Potential: <br />
            Take our Psychometric Tests Now!
          </h1>
          <p className="text-black mb-6 text-xl">
            Uncover your ideal career path & Personality Trait with our psychometric tests.
          </p>
          <Link to="/about " className='text-lg'>
            <Buttons text="Take the Test" />
          </Link>
        </div>
        )}
        {location.pathname.includes("/thankyou") && (
          
                <div className="lg:w-3/5  lg:text-left py-32 px-4 lg:mb-0 flex flex-col ">
          <h1 className="text-3xl font-bold text-black-800 ">
          Thank You for taking test!
          </h1>
        </div>
        )}

        <div className="lg:w-2/5">
          <img
            src={contentImage} // Replace with your actual image path or import statement
            alt="Psychometric Test Illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Content
