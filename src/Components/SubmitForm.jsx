import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import PDFTemplate from "./PDFTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useQuiz } from "../context/QuizContext";
import toast from "react-hot-toast";

function SubmitForm() {
  const { responses } = useQuiz();
  const navigate = useNavigate();
  const [showPDF, setShowPDF] = useState(true); // Control portal rendering
  const componentRefs = useRef([]); // Refs array for PDF pages
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const validateForm = () => {
    let formErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required.";
    }

    // Phone validation (e.g., must be 10 digits)
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
    }

    // Alternate phone validation (optional, but if present, must be 10 digits)
    if (!formData.altPhone.trim()) {
      formErrors.altPhone = "Alternate Phone number is required.";
    }
    if (formData.altPhone && !/^\d{10}$/.test(formData.altPhone)) {
      formErrors.altPhone = "Alternate phone number must be 10 digits.";
    }

    // Email validation
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      formErrors.email = "Please enter a valid email address.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Returns true if no errors
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (validateForm()) {
      const data = {
        responses: responses,
        user_details: formData,
      };
      console.log(data);
      toast.success("response submitted");
      navigate("/thankyou");
    }
  };

  const downloadPDF = async () => {
    setShowPDF(true); // Temporarily render the PDFTemplate

    // Wait a moment for the component to render in the portal
    // await new Promise((resolve) => setTimeout(resolve, 100));

    // const pdf = new jsPDF("p", "mm", "a4", true);
    // for (let i = 0; i < componentRefs.current.length; i++) {
    //   const componentRef = componentRefs.current[i];
    //   const canvas = await html2canvas(componentRef.current, { scale: 1.5 });
    //   const imageData = canvas.toDataURL("image/jpeg", 0.6); // use JPEG format and adjust quality

    //   pdf.addImage(imageData, "JPEG", 0, 0, 210, 297, undefined, "FAST");
    //   if (i === componentRefs.current.length - 1) {
    //     // Place the "Visit AARA Consultancy" link directly under the counseling button

    //     pdf.setFont("helvetica", "bold"); // Set font to Helvetica bold
    //     pdf.setFontSize(12);
    //     pdf.setTextColor(255, 255, 255); // Set color to white (RGB for white)
    //     pdf.textWithLink("Book your 1-1 Counseling", 78, 125, {
    //       url: "https://aaraconsultancy.com/one-on-one-counseling/",
    //     });
    //     pdf.setFont("helvetica", "normal"); // Set font back to normal
    //     pdf.setFontSize(12);
    //     pdf.setTextColor(0, 0, 0); // Set color back to black
    //     pdf.textWithLink("+91 8108 745 275", 17, 202, {
    //       url: "tel:+918108745275",
    //     });
    //     // Place website and email links near the contact information
    //     pdf.textWithLink("info@aaraconsultancy.com", 17, 212, {
    //       url: "mailto:info@aaraconsultancy.com",
    //     });
    //     pdf.textWithLink("www.aaraconsultancy.com", 17, 223, {
    //       url: "https://www.aaraconsultancy.com",
    //     });
    //   }
    //   if (i < componentRefs.current.length - 1) {
    //     pdf.addPage();
    //   }
    // }

    // pdf.save("SWOT_Test_Report.pdf");

    setShowPDF(false);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="max-h-screen flex flex-col items-start pt-12 text-start">
        <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mb-6 ml-12">
          Well Done!
        </h1>
        <p className="text-lg text-gray-700 mb-2 ml-12">
          You have Successfully Completed the test.
        </p>
        <p className="text-lg text-gray-700 mb-8 ml-12">
          Please Enter Your Details to Get the Report of the Assessment
        </p>

        {/* Form */}
        <form onSubmit={submitForm} className="space-y-6 flex flex-col w-full">
          <div className="grid grid-cols-12 items-center ml-12 space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Name:
            </label>
            <div className="col-span-11 md:col-span-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className=" px-4 py-2 border rounded-md focus:outline-black border-black w-full"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Phone no:
            </label>
            <div className="col-span-11 md:col-span-8">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-black border-black "
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Alternate Phone no (Parent):
            </label>
            <div className="col-span-11 md:col-span-8">
              <input
                type="text"
                name="altPhone"
                value={formData.altPhone}
                onChange={handleInputChange}
                placeholder="Alternate Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-black border-black"
              />
              {errors.altPhone && (
                <p className="text-red-500">{errors.altPhone}</p>
              )}
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Email:
            </label>
            <div className="col-span-11 md:col-span-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-black border-black"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="w-fit bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 lg:py-6 lg:px-8 rounded ml-12"
          >
            Submit & Get Report
          </button>
        </form>

        {/* Render PDFTemplate in a portal if showPDF is true */}
      </div>
      {showPDF &&
        ReactDOM.createPortal(
          <PDFTemplate refArray={componentRefs} />,
          document.body // Attach to the body, invisible to the user
        )}
    </div>
  );
}

export default SubmitForm;
