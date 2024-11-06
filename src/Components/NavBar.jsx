import { useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import logo from "../assets/Aara_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="bg-white flex justify-between items-center p-4">
        <div className="w-[168px] h-[80px] ml-4">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-8 px-10">
          <Link
            to="/"
            className="text-black font-extrabold text-md lg:text-lg font-poppins hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black font-extrabold text-md lg:text-lg hover:text-gray-600"
          >
            About Us
          </Link>
          <Link
            to="/submit"
            className="text-black font-extrabold text-md lg:text-lg hover:text-gray-600"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconX stroke={2} /> : <IconMenu2 stroke={2} />}
          </button>
        </div>
      </div>

      {/* Drawer menu for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <IconX stroke={2} className="w-8 h-8 text-black" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-10 py-4">
          <Link
            to="/"
            className="text-black font-extrabold text-md lg:text-lg font-poppins hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black font-extrabold text-md lg:text-lg hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/submit"
            className="text-black font-extrabold text-md lg:text-lg hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay to close the drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
