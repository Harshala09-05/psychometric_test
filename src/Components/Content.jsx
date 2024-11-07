import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import contentImage from "../assets/contentImage.png";
import Buttons from "./Buttons";

function Content() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleTakeTestClick = () => {
    navigate("/about"); // Navigate to About page
  };

  return (
    <div className="bg-white">
      <div className="max-w-full  mx-auto  px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center">
        {!location.pathname.includes("/thankyou") && (
          <div className="lg:w-3/5  lg:text-left py-32 px-4 lg:mb-0 flex flex-col gap-6">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-800 ">
              Discover Your Career Potential: <br />
              Take our Psychometric Tests Now!
            </h1>
            <p className="text-black mb-6 text-lg lg:text-xl">
              Uncover your ideal career path & Personality Trait with our
              psychometric tests.
            </p>
            <Link to="/about " className="text-md lg:text-lg">
              <Buttons text="Take the Test" />
            </Link>
          </div>
        )}
        {location.pathname.includes("/thankyou") && (
          <div className="lg:w-3/5  lg:text-left py-32 px-4 lg:mb-0 flex flex-col ">
            <h1 className="text-xl lg:text-3xl font-bold text-black-800 ">
              Thank You for taking test!
            </h1>
            {/* <div className="flex justify-center items-center">
              <button className="mt-6 py-2 px-2 bg-gray-800 hover:bg-gray-700 text-white rounded">
                Download as PDF (A4)
              </button>
            </div> */}
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
  );
}

export default Content;
