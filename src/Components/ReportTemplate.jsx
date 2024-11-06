import React from "react";
import logo from "../assets/img21.jpg";
import ladder from "../assets/ladder.jpg";
import swot from "../assets/SWOT.jpg";
import person from "../assets/person.jpg";
import logoSmall from "../assets/Aara_logo.png";
import mountain from "../assets/img145.jpg";
import CareerChoices from "./CareerChoices";
import counselingImage from "../assets/Counseling.jpg";
import threat from "../assets/Threat.jpg";
import { Link } from "react-router-dom";
import SWOT_Analysis from "./SWOT_Analysis";

function ReportTemplate({
  userName,
  testDate,
  strengths,
  weaknesses,
  opportunities,
  threats,
}) {
  const profileDescription =
    "The candidate demonstrates empathy by showing genuine concern for others' feelings and experiences. They have a natural ability to listen attentively, understand different perspectives, and offer support and comfort when needed. This trait allows them to build meaningful relationships and contribute positively to the community.";

  const careerFields = [
    "Psychology",
    "Doctor and other paramedical fields",
    "Biotechnology",
  ];

  return (
    <>
      <div className="relative w-[794px] min-h-[1123px] bg-white border border-black overflow-hidden ">
        {/* Left Red Border */}
        <div className="absolute top-0 left-0 h-full w-2 bg-red-500"></div>

        {/* Logo and Title */}
        <div className="flex flex-col p-6 ml-10">
          <div className="mb-6">
            <img
              src={logo}
              alt="AARA Consultancy Logo"
              className="w-[300px] h-auto"
            />
          </div>

          {/* Report Title */}
          <h1 className="text-7xl font-semibold text-left mt-20 ml-12">
            SWOT <br /> TEST REPORT
          </h1>
        </div>

        {/* User Information */}
        <div className="text-left mt-8 px-6 ml-24">
          <h2 className="text-3xl font-semibold">{userName}</h2>
          <p className="text-gray-600">Test taken on {testDate}</p>
        </div>

        {/* Illustration */}
        <div className="flex justify-end absolute right-0 bottom-0">
          <img
            src={ladder}
            alt="Illustration"
            // className="w-1/2 h-auto -mr-60"
          />
        </div>
      </div>

      {/* Report Content */}
      <div className="relative w-[794px] min-h-[1123px] bg-white border border-black overflow-hidden ">
        {/* Logo and Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-6xl font-bold text-gray-600 text-left">
            Introduction
          </h1>
          <img
            src={logoSmall}
            alt="AARA Consultancy Logo"
            className="w-[200px] h-auto"
          />
        </div>

        {/* SWOT Boxes */}
        <div className="w-full mb-8 p-8">
          <img src={swot} alt="" className="w-full" />
        </div>

        {/* Introduction Text */}
        <div className="text-left">
          <p className="mb-4">
            The
            <strong className="font-bold"> SWOT TEST</strong> helps individuals
            identify what they're good at, areas they can improve, chances they
            can take advantage of, and challenges they may face. This test can
            be helpful for personal development and career planning by providing
            insights into one's internal and external factors.
          </p>
          <ul className="list-none ">
            <li className="mb-2">
              Self-Discovery: It helps individuals discover hidden strengths and
              talents they may not have been aware of before.
            </li>
            <li className="mb-2">
              Growth Opportunities: Identifying weaknesses allows for targeted
              efforts towards personal growth and development.
            </li>
            <li className="mb-2">
              Strategic Planning: By recognizing opportunities, individuals can
              strategize on how to maximize their potential and achieve their
              goals.
            </li>
            <li>
              Risk Management: Awareness of potential threats enables
              individuals to prepare and mitigate risks effectively.
            </li>
          </ul>
        </div>

        {/* Bottom Illustration */}
        <div className="flex justify-end mt-8">
          <img src={person} alt="Bottom Illustration" className="w-96 h-auto" />
        </div>
      </div>

      <div className="relative w-[794px] min-h-[1123px] bg-white border border-black overflow-hidden">
        {/* Header with Logo and Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold p-8">Profile</h1>
          <img
            src={logo}
            alt="AARA Consultancy Logo"
            className="w-[200px] h-auto"
          />
        </div>

        {/* Profile Description */}
        <div className="mb-8 ml-8">
          <h2 className="text-2xl font-semibold text-left">
            {userName}'s Profile
          </h2>
          <p className="mt-4 text-lg text-left">{profileDescription}</p>
        </div>

        {/* Career Fields */}
        <div className="mb-8 flex flex-col items-start p-8">
          <h3 className="text-2xl font-bold">Probable Career Fields</h3>
          <ul className="list-disc text-left mt-4 text-lg">
            {careerFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>

        {/* Bottom Illustration */}
        <div className="flex justify-end mt-8">
          <img src={mountain} alt="Illustration" className="w-1/3 h-auto" />
        </div>
      </div>
      <div>
        <CareerChoices />
      </div>

      {/* SWOT Analysis */}
      <SWOT_Analysis />

      <div className=" bg-white p-8 text-gray-800 relative w-[794px] min-h-[1123px] bg-white border border-black overflow-hidden">
        {/* Left Red Border */}
        <div className="absolute top-0 left-0 h-full w-2 bg-red-500"></div>

        {/* Header with Title and Logo */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">SWOT Analysis</h2>
          <img src={logo} alt="AARA Consultancy Logo" className="w-40 h-auto" />
        </div>

        {/* Threat Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-left">Threat</h3>
          <ul className="list-disc text-left space-y-4 mt-4 text-lg ml-10">
            <li>
              Challenges in addressing healthcare inequities, access barriers,
              and disparities in healthcare outcomes, particularly in
              underserved communities.
            </li>
            <li>
              High levels of stress, burnout, and emotional exhaustion among
              healthcare professionals impact job satisfaction and patient care.
            </li>
            <li>
              Adapting to evolving healthcare regulations, insurance policies,
              and reimbursement models may impact practice autonomy and
              financial viability.
            </li>
            <li>
              Stringent regulatory requirements, clinical trials, and approval
              processes for drug development and biotech products may delay time
              to market and increase costs, risks of patent infringement,
              intellectual property disputes, and challenges in protecting
              proprietary technologies and innovations.
            </li>
            <li>
              Certain biotechnological applications, potential unintended
              consequences and ecological impacts of biotechnological
              interventions include gene flow, ecosystem disruption, and
              biodiversity loss.
            </li>
          </ul>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mt-10">
          <img
            src={threat}
            alt="Illustration of SWOT Analysis"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="relative w-[794px] min-h-[1123px] bg-white border border-black overflow-hidden">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="AARA Consultancy Logo" className="w-40 h-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          Your Trusted Partner for Study Abroad & Career Counseling
        </h2>

        {/* Counseling Description */}
        <div className="  md:w-full flex  mt-4 md:mt-0 p-1 mb-6">
          <img
            src={counselingImage}
            alt="Counseling Session"
            className="w-full h-auto"
          />
        </div>

        {/* Call to Action Button */}
        <Link to="https://aaraconsultancy.com/one-on-one-counseling/">
          <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full mb-8 hover:bg-red-600">
            Book your 1-1 Counseling
          </button>
        </Link>
        {/* Address Section */}
        <div className="text-left mb-6">
          <div className="flex items-start mb-4">
            <span className="text-red-500 mr-2">📍 </span>
            <div>
              <p className="font-semibold">Vidyavihar:</p>
              <p>
                608, 6th Floor, Surya House, Road Number 7, opposite R.N Gandhi
                High School, near Vidyavihar station (east), Rajawadi Colony,
                Mumbai, Maharashtra 400077
              </p>
            </div>
          </div>
          <div className="flex items-start mb-10">
            <span className="text-red-500 mr-2">📍</span>
            <div>
              <p className="font-semibold">Andheri:</p>
              <p>
                DN Nagar Metro Station, 1308 Lotus Link Square, Besides, JP Rd,
                D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053
              </p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-red-500">📞</span>
            <p>+91 8108 745 275</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-500">✉️</span>
            <p>info@aaraconsultancy.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-500">🌐</span>
            <p>www.aaraconsultancy.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportTemplate;
