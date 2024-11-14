import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logobig from "../assets/pdf_images/img21.jpg";
import ladder from "../assets/pdf_images/ladder.jpg";
import swot from "../assets/pdf_images/SWOT.jpg";
import person from "../assets/pdf_images/person.jpg";
import mountain from "../assets/pdf_images/img145.jpg";
import logosmall from "../assets/pdf_images/img26.jpg";
import threat from "../assets/pdf_images/threat.jpg";
import counselingImage from "../assets/pdf_images/counselingImage.png";
import { Link } from "react-router-dom";
import {
  IconWorld,
  IconPhoneFilled,
  IconMailFilled,
} from "@tabler/icons-react";

import { FaMapMarkerAlt } from "react-icons/fa";

const PDFTemplate = ({ refArray, userDetail, data }) => {
  // const userName = "Sachin Kaythamwar";
  const testDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const maxItemsPerPage = 4;
  const profileChunks = [];
  for (let i = 0; i < data.strengths.length; i += maxItemsPerPage) {
    profileChunks.push(data.strengths.slice(i, i + maxItemsPerPage));
  }

  const chunkCareerData = (data, size) => {
    const chunks = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const chunkData = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };
  const maxFieldsPerPage = 8;
  const swotChunks = {
    strengths: chunkData(data.strengths || [], maxFieldsPerPage),
    weaknesses: chunkData(data.weaknesses || [], maxFieldsPerPage),
    opportunities: chunkData(
      data.career_fields?.map((f) => f.opportunities) || [],
      maxFieldsPerPage
    ),
  };
  const threatChunks = {
    threats: chunkData(
      data.career_fields?.map((f) => f.threats) || [],
      maxFieldsPerPage
    ),
  };
  let currentRefIndex = 0;
  const careerDataChunks = chunkCareerData(data.career_fields, 2);
  // Function to generate a ref and push to refs array for each section
  const getComponentRef = () => {
    if (!refArray.current[currentRefIndex]) {
      refArray.current[currentRefIndex] = React.createRef();
    }
    return refArray.current[currentRefIndex++];
  };

  return (
    <>
      <div
        className="flex flex-wrap m-0 p-0 font-custom"
        style={{
          position: "absolute",
          top: "-10000px", // Positions the component off-screen
          left: "-10000px",
        }}
      >
        {/* Page 1 */}
        <div
          ref={getComponentRef()}
          className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white  overflow-hidden"
        >
          {/* Left Red Border */}
          <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500 z-10"></div>

          {/* Logo and Title */}
          <div className="ml-[30px] mt-[20px] p-5 z-10">
            <img
              src={logobig}
              alt="AARA Consultancy Logo"
              className="w-[200px]"
            />
            <h1 className="text-4xl font-bold mt-6">
              SWOT <br /> TEST REPORT
            </h1>
          </div>

          {/* User Information */}
          <div className="ml-[60px] mt-[20px] z-[10]">
            <h2 className="text-2xl font-semibold">{userDetail.name}</h2>
            <p className="text-gray-500">Test taken on {testDate}</p>
          </div>

          {/* Background Image */}
          <img
            src={ladder}
            alt="Background Illustration"
            className="absolute bottom-[-80px] right-[-220px] w-full h-auto opacity-80 "
          />
        </div>

        {/* Page 2 */}
        <div
          ref={getComponentRef()}
          className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white  overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
          {/* Content */}
          <div className="p-4 relative z-10">
            {/* Title */}
            <div className="flex justify-between items-center mb-8 px-4 py-6">
              <h1 className="text-6xl font-bold text-gray-600">Introduction</h1>
              <img
                src={logosmall}
                alt="AARA Consultancy Logo"
                className="w-[150px] h-auto"
              />
            </div>

            {/* SWOT Image */}
            <div className="w-full mb-8">
              <img src={swot} alt="SWOT Analysis" className="w-full" />
            </div>

            {/* Introduction Text */}
            <div className="text-gray-800 p-4 text-justify text-lg">
              <p className="mb-4">
                The <strong>SWOT TEST</strong> helps individuals identify what
                they're good at, areas they can improve, chances they can take
                advantage of, and challenges they may face. This test can be
                helpful for personal development and career planning by
                providing insights into one's internal and external factors.
              </p>
              <ul>
                <li className="leading-normal mt-3">
                  Self-Discovery: It helps individuals discover hidden strengths
                  and talents they may not have been aware of before.
                </li>
                <li className="leading-normal mt-3">
                  Growth Opportunities: Identifying weaknesses allows for
                  targeted efforts towards personal growth and development.
                </li>
                <li className="leading-normal mt-3">
                  Strategic Planning: By recognizing opportunities, individuals
                  can strategize on how to maximize their potential and achieve
                  their goals.
                </li>
                <li className="leading-normal mt-3">
                  Risk Management: Awareness of potential threats enables
                  individuals to prepare and mitigate risks effectively.
                </li>
              </ul>
            </div>
          </div>

          {/* Background Image */}
          <img
            src={person}
            alt="Background Illustration"
            className="absolute bottom-0 right-0 w-96 h-auto opacity-70"
          />
        </div>

        {/* Page 3 */}
        <div
          ref={getComponentRef()}
          className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white  overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
          <div className="p-8 relative z-10">
            {/* Profile Title */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold mb-8">Profile</h1>
              <img
                src={logosmall}
                alt="AARA Consultancy Logo"
                className="w-32 h-auto"
              />
            </div>

            {/* Profile Description */}
            <div className="mb-8 ">
              <h2 className="text-2xl font-semibold mb-2">
                {userDetail.name}'s Profile
              </h2>
              {data.strengths.slice(0, 4).map((item, index) => (
                <div key={index} className="mb-4 p-2 text-justify">
                  <p className="text-md">{item.profile_description}</p>
                </div>
              ))}
              <p className="mt-4 text-lg"></p>
            </div>

            {/* Career Fields */}

            {/* Career Fields */}
            {data.strengths.length <= 4 && (
              // Display Career Fields in the same ref if strengths are 4 or fewer
              <div className="mb-8">
                <h3 className="text-2xl font-bold">Probable Career Fields</h3>
                <div className="flex flex-col space-y-4 mt-4 text-lg">
                  {data.career_fields.map((field, index) => (
                    <div key={index} className="flex items-start text-justify">
                      <span className="mr-2 text-black font-bold">•</span>
                      <p className="max-w-80">{field.field_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Background Image */}
          <img
            src={mountain}
            alt="Background Illustration"
            className="absolute bottom-[-98px] right-[-305px]  w-full h-auto opacity-70 scale-150"
          />
        </div>

        {data.strengths.length >= 4 && (
          <>
            {profileChunks.map((chunk, index) => (
              <div
                key={index}
                ref={getComponentRef()} // Adjust index for dynamic pages after static pages
                className="relative w-[794px] min-h-[1123px] bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
                <div className="p-8 relative z-10">
                  <h1 className="text-4xl font-bold mb-8">Profile</h1>
                  {chunk.map((item, idx) => (
                    <div key={idx} className="mb-4 text-justify">
                      <p className="text-lg">{item.profile_description}</p>
                    </div>
                  ))}
                </div>
                <img
                  src={mountain}
                  alt="Background Illustration"
                  className="absolute bottom-[-98px] right-[-305px] w-full h-auto opacity-70 scale-150"
                />
              </div>
            ))}
            <div
              ref={getComponentRef()} // Next page after last profile chunk
              className="relative w-[794px] min-h-[1123px] bg-white overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
              <div className="p-8 relative z-10">
                <h3 className="text-4xl font-bold mb-4">
                  Probable Career Fields
                </h3>
                <div className="flex flex-col space-y-4 text-lg">
                  {data.career_fields.map((field, index) => (
                    <div key={index} className="flex items-start text-justify">
                      <span className="mr-2 text-black font-bold">•</span>
                      <p className="max-w-80">{field.field_name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={mountain}
                alt="Background Illustration"
                className="absolute bottom-[-98px] right-[-305px]  w-full h-auto opacity-70 scale-150"
              />
            </div>
          </>
        )}

        {/* Probable Career Choices Pages */}
        {/* <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div> */}
        {/* Header */}

        {/* Loop through each career item in the array */}
        {/* {careerDataChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            ref={getComponentRef(chunkIndex + 3)}
            className="relative w-[794px] min-h-[1123px] bg-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
            <div className="w-full bg-white p-8 text-gray-800 text-left flex flex-col">
              <h1 className="text-4xl font-bold mb-6">
                Probable Career Choices
              </h1>
              {chunk.map((career, index) => (
                <div key={index} className="mb-8 flex-1">
                  <h2 className="text-2xl font-semibold mb-4">
                    {career.field_name}
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    {career.description}
                  </p>
                  <p className="text-lg mb-8">
                    <strong>Example:</strong>
                    {career.example1}
                    {career.example2 && career.example2}
                  </p>
                </div>
              ))}
              <div className="flex justify-center mt-10">
                <img
                  src={logosmall}
                  alt="AARA Consultancy Logo"
                  className="w-32 h-auto"
                />
              </div>
            </div>
          </div>
        ))} */}
        {careerDataChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            ref={getComponentRef()}
            className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white overflow-hidden flex"
          >
            {/* Left Red Border */}
            <div className="absolute top-0 bottom-0 left-0 w-[10px] bg-red-500"></div>

            {/* Content Section */}
            <div className="w-full bg-white p-8 text-gray-800 text-left flex flex-col">
              <h1 className="text-4xl font-bold mb-6">
                Probable Career Choices
              </h1>
              <div className="flex-1">
                {chunk.map((career, index) => (
                  <div key={index} className="mb-4 text-justify">
                    <h2 className="text-2xl font-semibold mb-4">
                      {career.field_name}
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                      {career.description}
                    </p>
                    <p className="text-lg mb-8">
                      <strong>Example:</strong>
                      {career.example2 ? (
                        <div>
                          <div className="flex items-start">
                            <span className="mr-2 text-black font-bold">•</span>
                            <p>{career.example1}</p>
                          </div>
                          <div className="flex items-start">
                            <span className="mr-2 text-black font-bold">•</span>
                            <p>{career.example2}</p>
                          </div>
                        </div>
                      ) : (
                        <p>{career.example1}</p>
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Logo positioned at the bottom */}
              <div className=" w-full flex justify-center">
                <img
                  src={logosmall}
                  alt="AARA Consultancy Logo"
                  className="w-32 h-auto"
                />
              </div>
            </div>
          </div>
        ))}

        {Object.entries(swotChunks).map(([section, chunks]) =>
          chunks.map((fieldsChunk, chunkIndex) => (
            <div
              key={`${section}-${chunkIndex}`}
              ref={getComponentRef()}
              className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white overflow-hidden p-8 flex flex-col"
            >
              <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">
                  SWOT Analysis <br />
                </h2>
              </div>
              <div className="flex flex-col space-y-3 mt-8 ml-4 flex-1">
                <h3 className="text-2xl font-semibold text-left">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                {fieldsChunk.map((field, fieldIndex) => (
                  <div
                    key={fieldIndex}
                    className="flex items-start text-justify leading-normal"
                  >
                    <span className="mr-2 text-black font-bold">•</span>
                    <p className="text-lg text-gray-800">
                      {section === "strengths" && field.strength
                        ? `${field.attribute}: ${field.strength}`
                        : section === "weaknesses" && field.weakness
                        ? `${field.attribute}: ${field.weakness}`
                        : section === "opportunities" &&
                          typeof field === "string"
                        ? field // Opportunity might be a simple string
                        : section === "threats" && typeof field === "string"
                        ? field // Threat might be a simple string
                        : null}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <img
                  src={logosmall}
                  alt="AARA Consultancy Logo"
                  className="w-32 h-auto"
                />
              </div>
            </div>
          ))
        )}

        {threatChunks.threats.map((threatChunk, chunkIndex) => (
          <div
            key={`threat-${chunkIndex}`}
            ref={getComponentRef()}
            className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white overflow-hidden"
          >
            <div className="p-8 text-gray-800 relative w-full h-full bg-white overflow-hidden">
              {/* Left Red Border */}
              <div className="absolute top-0 bottom-0 left-0 w-[10px] bg-red-500 z-[100]"></div>

              {/* Header with Title and Logo */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">SWOT Analysis</h2>
                <img
                  src={logosmall}
                  alt="AARA Consultancy Logo"
                  className="w-32 h-auto"
                />
              </div>

              {/* Threat Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-left">Threat</h3>
                <div className="flex flex-col space-y-4 mt-4 text-lg ml-4 text-left">
                  {threatChunk.map((threat, index) => (
                    <div
                      key={index}
                      className="flex items-start leading-normal text-justify"
                    >
                      <span className="mr-2 text-black font-bold">•</span>
                      <p>{threat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Illustration positioned at the bottom */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <img
                  src={threat}
                  alt="Illustration of SWOT Analysis"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Page 5 */}
        <div
          className="relative w-[794px] min-h-[1123px] max-h-[1123px] bg-white  overflow-hidden"
          ref={getComponentRef()}
        >
          <div className="text-gray-800 p-2 text-center relative w-full h-full bg-white  overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
            {/* Logo */}
            <div className="flex justify-center mb-4 mt-10">
              <img
                src={logosmall}
                alt="AARA Consultancy Logo"
                className="w-40 h-auto"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-6">
              Your Trusted Partner for Study Abroad & Career Counseling
            </h2>

            {/* Counseling Description */}
            <div className="md:w-full flex  mt-4 md:mt-0 p-1 mb-6">
              <img
                src={counselingImage}
                alt="Counseling Session"
                className="w-full h-auto"
              />
            </div>

            {/* Call to Action Button */}
            <Link to="https://aaraconsultancy.com/one-on-one-counseling/">
              <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full mb-8 hover:bg-red-600 min-w-[262px] min-h-[48px]"></button>
            </Link>
            {/* Address Section */}
            <div className="text-left mb-6">
              <div className="flex items-center mb-4">
                {/* <span className="text-red-500 mr-2">📍 </span> */}
                <div className="mx-4">
                  <FaMapMarkerAlt color="red" size={20} />
                </div>
                <div className="min-h-[72px]">
                  {/* <span className="font-semibold">Vidyavihar:</span>
                  <p>
                    608, 6th Floor, Surya House, Road Number 7, opposite R.N
                    Gandhi High School, near Vidyavihar station (east), Rajawadi
                    Colony, Mumbai, Maharashtra 400077
                  </p> */}
                </div>
              </div>
              <div className="flex items-center mb-10">
                {/* <span className="text-red-500 mr-2">📍</span> */}
                <div className="mx-4">
                  <FaMapMarkerAlt color="red" size={20} />
                </div>
                <div className="min-h-[72px]">
                  {/* <span className="font-semibold">Andheri:</span>
                  <p>
                    DN Nagar Metro Station, 1308 Lotus Link Square, Besides, JP
                    Rd, D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053
                  </p> */}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-start space-y-6 p-4 mt-16">
              <div className="flex items-center space-x-2">
                <span className="text-white bg-red-500 rounded-full p-1">
                  <IconPhoneFilled stroke={1} />
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white bg-red-500 rounded-full p-1">
                  <IconMailFilled stroke={1} />
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white bg-red-500 rounded-full p-1">
                  <IconWorld stroke={1} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFTemplate;
