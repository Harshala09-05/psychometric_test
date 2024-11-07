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

const PDFTemplate = ({ refArray }) => {
  const userName = "Sachin Kaythamwar";
  const testDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const profileDescription =
    "The candidate demonstrates empathy by showing genuine concern for others' feelings and experiences. They have a natural ability to listen attentively, understand different perspectives, and offer support and comfort when needed. This trait allows them to build meaningful relationships and contribute positively to the community.";

  const careerFields = [
    "Psychology",
    "Doctor and other paramedical fields",
    "Biotechnology",
  ];

  const careerData = [
    {
      mainCareer: "Psychology",
      description:
        "Psychology helps us understand how people think, feel, and behave. Psychologists work to improve mental health, develop new ways to help people, and study why we act the way we do. They play an important role in making sure people stay mentally healthy and happy.",
      example:
        "Going to a therapist to talk about your feelings or using relaxation techniques to deal with stress shows how psychology helps us in our daily lives.",
    },
    {
      mainCareer: "Biology",
      description:
        "Biology is the study of life and living organisms, covering topics such as genetics, ecology, and evolution. Biologists work to understand how organisms function, interact, and evolve over time.",
      example:
        "Studying how plants photosynthesize or how animals adapt to their environment are examples of biology in action.",
    },
    {
      mainCareer: "Engineering",
      description:
        "Engineering applies scientific and mathematical principles to solve practical problems, from designing buildings to developing software. Engineers work in various fields like civil, mechanical, and software engineering.",
      example:
        "Creating a bridge structure that can withstand heavy loads or developing software to automate tasks are examples of engineering applications.",
    },
    {
      mainCareer: "Psychology",
      description:
        "Psychology helps us understand how people think, feel, and behave. Psychologists work to improve mental health, develop new ways to help people, and study why we act the way we do. They play an important role in making sure people stay mentally healthy and happy.",
      example:
        "Going to a therapist to talk about your feelings or using relaxation techniques to deal with stress shows how psychology helps us in our daily lives.",
    },
    {
      mainCareer: "Biology",
      description:
        "Biology is the study of life and living organisms, covering topics such as genetics, ecology, and evolution. Biologists work to understand how organisms function, interact, and evolve over time.",
      example:
        "Studying how plants photosynthesize or how animals adapt to their environment are examples of biology in action.",
    },
    {
      mainCareer: "Engineering",
      description:
        "Engineering applies scientific and mathematical principles to solve practical problems, from designing buildings to developing software. Engineers work in various fields like civil, mechanical, and software engineering.",
      example:
        "Creating a bridge structure that can withstand heavy loads or developing software to automate tasks are examples of engineering applications.",
    },
  ];

  const SwOT = [
    {
      mainSWOT: "Strength",
      Fields: [
        {
          label: "Empathetic",
          description:
            "Empathy fosters strong interpersonal relationships, understanding of diverse perspectives, and offering support to peers in need.",
        },
        {
          label: "Data & Numbers",
          description:
            "Being good with data and numbers helps you analyze information effectively, make informed decisions, and solve complex problems.",
        },
        {
          label: "Research-oriented",
          description:
            "Having a research-oriented mindset encourages curiosity, critical thinking, and the ability to find credible sources of information.",
        },
        {
          label: "Communication Skills",
          description:
            "Having strong communication skills allows you to interact effectively with peers, teachers, and professionals. You can present ideas clearly, collaborate efficiently, and resolve conflicts.",
        },
        {
          label: "Creativity",
          description:
            "Being creative sparks innovation, problem-solving, and thinking outside the box. This leads to unique solutions and approaches to challenges.",
        },
      ],
    },
    {
      mainSWOT: "Weakness",
      Fields: [
        {
          label: "Biology",
          description:
            "Empathy fosters strong interpersonal relationships, understanding of diverse perspectives, and offering support to peers in need.",
        },
        {
          label: "Leadership Skills",
          description:
            "Being good with data and numbers helps you analyze information effectively, make informed decisions, and solve complex problems.",
        },
        {
          label: "Communication Skills",
          description:
            "Having strong communication skills allows you to interact effectively with peers, teachers, and professionals. You can present ideas clearly, collaborate efficiently, and resolve conflicts.",
        },
      ],
    },
    {
      mainSWOT: "Opportunity",
      Fields: [
        {
          label: "Empathetic",
          description:
            "Empathy fosters strong interpersonal relationships, understanding of diverse perspectives, and offering support to peers in need.",
        },
        {
          label: "Data & Numbers",
          description:
            "Being good with data and numbers helps you analyze information effectively, make informed decisions, and solve complex problems.",
        },
        {
          label: "Research-oriented",
          description:
            "Having a research-oriented mindset encourages curiosity, critical thinking, and the ability to find credible sources of information.",
        },
        {
          label: "Communication Skills",
          description:
            "Having strong communication skills allows you to interact effectively with peers, teachers, and professionals. You can present ideas clearly, collaborate efficiently, and resolve conflicts.",
        },
        {
          label: "Creativity",
          description:
            "Being creative sparks innovation, problem-solving, and thinking outside the box. This leads to unique solutions and approaches to challenges.",
        },
      ],
    },
  ];

  const chunkCareerData = (data, size) => {
    const chunks = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };
  const careerDataChunks = chunkCareerData(careerData, 3);

  // Function to generate a ref and push to refs array for each section
  const getComponentRef = (index) => {
    if (!refArray.current[index]) {
      refArray.current[index] = React.createRef();
    }
    return refArray.current[index];
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
          ref={getComponentRef(0)}
          className="relative w-[794px] min-h-[1123px] bg-white  overflow-hidden"
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
            <h2 className="text-2xl font-semibold">{userName}</h2>
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
          ref={getComponentRef(1)}
          className="relative w-[794px] min-h-[1123px] bg-white  overflow-hidden"
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
            <div className="text-left text-gray-800 p-4">
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
          ref={getComponentRef(2)}
          className="relative w-[794px] min-h-[1123px] bg-white  overflow-hidden"
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
              <h2 className="text-2xl font-semibold">{userName}'s Profile</h2>
              <p className="mt-4 text-lg">{profileDescription}</p>
            </div>

            {/* Career Fields */}
            <div className="mb-8 ">
              <h3 className="text-2xl font-bold">Probable Career Fields</h3>
              <div className="flex flex-col space-y-4 mt-4 text-lg">
                {careerFields.map((field, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-2 text-black font-bold">•</span>
                    <p>{field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Image */}
          <img
            src={mountain}
            alt="Background Illustration"
            className="absolute bottom-[-98px] right-[-305px]  w-full h-auto opacity-70 scale-150"
          />
        </div>

        {/* Probable Career Choices Pages */}
        <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
        {/* Header */}

        {/* Loop through each career item in the array */}
        {careerDataChunks.map((chunk, chunkIndex) => (
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
                    {career.mainCareer}
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    {career.description}
                  </p>
                  <p className="text-lg mb-8">
                    <strong>Example:</strong> {career.example}
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
        ))}

        {SwOT.map(({ mainSWOT, Fields }, index) => (
          <div
            key={index}
            ref={getComponentRef(index + careerDataChunks.length + 3)}
            className="relative w-[794px] min-h-[1123px] bg-white overflow-hidden p-8 flex flex-col"
          >
            <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">SWOT Analysis</h2>
            </div>
            <h2 className="text-2xl font-bold">{mainSWOT}</h2>
            <div className="flex flex-col space-y-3 mt-4 ml-4  flex-1">
              {Fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="flex items-start">
                  <span className="mr-2 text-black font-bold">•</span>
                  <p>
                    <strong>{field.label}:</strong> {field.description}
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
        ))}

        {/* Page 4 */}
        <div
          className="relative w-[794px] min-h-[1123px] bg-white  overflow-hidden"
          ref={getComponentRef(careerDataChunks.length + SwOT.length + 3)}
        >
          <div className="p-8 text-gray-800 relative w-[794px] min-h-[1123px] bg-white  overflow-hidden">
            {/* Left Red Border */}
            <div className="absolute top-0 left-0 h-full w-[10px] bg-red-500"></div>

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
                <div className="flex items-start leading-normal">
                  <span className="mr-2 text-black font-bold">•</span>
                  <p>
                    Challenges in addressing healthcare inequities, access
                    barriers, and disparities in healthcare outcomes,
                    particularly in underserved communities.
                  </p>
                </div>
                <div className="flex items-start leading-normal">
                  <span className="mr-2 text-black font-bold">•</span>
                  <p>
                    High levels of stress, burnout, and emotional exhaustion
                    among healthcare professionals impact job satisfaction and
                    patient care.
                  </p>
                </div>
                <div className="flex items-start leading-normal">
                  <span className="mr-2 text-black font-bold">•</span>
                  <p>
                    Adapting to evolving healthcare regulations, insurance
                    policies, and reimbursement models may impact practice
                    autonomy and financial viability.
                  </p>
                </div>
                <div className="flex items-start leading-normal">
                  <span className="mr-2 text-black font-bold">•</span>
                  <p>
                    Stringent regulatory requirements, clinical trials, and
                    approval processes for drug development and biotech products
                    may delay time to market and increase costs, risks of patent
                    infringement, intellectual property disputes, and challenges
                    in protecting proprietary technologies and innovations.
                  </p>
                </div>
                <div className="flex items-start leading-normal">
                  <span className="mr-2 text-black font-bold">•</span>
                  <p>
                    Certain biotechnological applications, potential unintended
                    consequences and ecological impacts of biotechnological
                    interventions include gene flow, ecosystem disruption, and
                    biodiversity loss.
                  </p>
                </div>
              </div>
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
        </div>

        {/* Page 5 */}
        <div
          className="relative w-[794px] min-h-[1123px] bg-white  overflow-hidden"
          ref={getComponentRef(careerDataChunks.length + SwOT.length + 4)}
        >
          <div className="text-gray-800 p-2 text-center relative w-[794px] min-h-[1123px] bg-white  overflow-hidden">
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
                <div>
                  <span className="font-semibold">Vidyavihar:</span>
                  <p>
                    608, 6th Floor, Surya House, Road Number 7, opposite R.N
                    Gandhi High School, near Vidyavihar station (east), Rajawadi
                    Colony, Mumbai, Maharashtra 400077
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-10">
                {/* <span className="text-red-500 mr-2">📍</span> */}
                <div className="mx-4">
                  <FaMapMarkerAlt color="red" size={20} />
                </div>
                <div>
                  <span className="font-semibold">Andheri:</span>
                  <p>
                    DN Nagar Metro Station, 1308 Lotus Link Square, Besides, JP
                    Rd, D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col items-start space-y-2 p-4">
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
