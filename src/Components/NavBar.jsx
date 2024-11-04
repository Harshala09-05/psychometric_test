import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Aara_logo.png";

export default function NavBar() {
  return (
    //     <nav className="bg-white shadow">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    //         <div className="flex justify-between items-center h-16 ">
    //           {/* Logo Section */}
    //           <div className="flex items-center">
    //             <img src={logo} alt="AARA CONSULTANCY" className="h-10 w-auto mr-2" />

    //           </div>

    //           {/* Links for Desktop */}
    //           <div className="hidden md:flex space-x-8">
    //             <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">
    //               Home
    //             </Link>
    //             <Link to="/counseling" className="text-gray-800 hover:text-gray-600 font-medium">
    //               Career Counseling
    //             </Link>
    //             <Link to="/about" className="text-gray-800 hover:text-gray-600 font-medium">
    //               About Us
    //             </Link>
    //             <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
    //               Contact Us
    //             </Link>
    //           </div>

    // </div>
    //       </div>
    //      </nav>
    <nav>
      <div className="bg-white flex justify-between items-center p-4">
        <div className="w-[168px] h-[80px] ml-4">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex space-x-8 px-10 ">
          <Link
            to="/"
            className="text-black font-extrabold text-lg  font-poppins hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/counseling"
            className="text-black font-extrabold text-lg  hover:text-gray-600"
          >
            Career Counseling
          </Link>
          <Link
            to="/about"
            className="text-black font-extrabold text-lg  hover:text-gray-600"
          >
            About Us
          </Link>
          <Link
            to="/submit"
            className="text-black font-extrabold text-lg  hover:text-gray-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
