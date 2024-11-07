import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import PDFTemplate from "./PDFTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useQuiz } from "../context/QuizContext";
import toast from "react-hot-toast";
import axios from "axios";

function SubmitForm() {
  const { responses } = useQuiz();
  const navigate = useNavigate();
  const [showPDF, setShowPDF] = useState(false); // Control portal rendering
  const [pdfFill, setPdfFill] = useState(null);
  const componentRefs = useRef([]); // Refs array for PDF pages
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    alt_phone: "",
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
    if (!formData.alt_phone.trim()) {
      formErrors.alt_phone = "Alternate Phone number is required.";
    }
    if (formData.alt_phone && !/^\d{10}$/.test(formData.alt_phone)) {
      formErrors.alt_phone = "Alternate phone number must be 10 digits.";
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

  const submitForm = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        responses: responses,
        user_detail: formData,
      };

      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/swot/submitresponses/`,
          data
        );
        if (response.data.result) {
          setPdfFill(response.data.result); // Assign to pdfFill if it has a value
          setShowPDF(true);
        }
        downloadPDF();
        toast.success("Response submitted successfully");
      } catch (error) {
        toast.error("Failed to submit response. Please try again.");
        console.error("Error submitting form:", error);
      }
    }
  };

  const downloadPDF = async () => {
    setShowPDF(true); // Temporarily render the PDFTemplate

    // Wait a moment for the component to render in the portal
    await new Promise((resolve) => setTimeout(resolve, 100));

    const pdf = new jsPDF("p", "mm", "a4", true);
    for (let i = 0; i < componentRefs.current.length; i++) {
      const componentRef = componentRefs.current[i];
      const canvas = await html2canvas(componentRef.current, { scale: 1.5 });
      const imageData = canvas.toDataURL("image/jpeg", 0.8); // use JPEG format and adjust quality

      pdf.addImage(imageData, "JPEG", 0, 0, 210, 297, undefined, "FAST");
      if (i === componentRefs.current.length - 1) {
        pdf.setFont("helvetica", "bold"); // Set font to Helvetica bold
        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255); // Set color to white (RGB for white)
        pdf.textWithLink("Book your 1-1 Counseling", 78, 125, {
          url: "https://aaraconsultancy.com/one-on-one-counseling/",
        });
        pdf.setFont("helvetica", "normal"); // Set font back to normal
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0); // Set color back to black
        pdf.textWithLink("+91 8108 745 275", 17, 202, {
          url: "tel:+918108745275",
        });
        // Place website and email links near the contact information
        pdf.textWithLink("info@aaraconsultancy.com", 17, 212, {
          url: "mailto:info@aaraconsultancy.com",
        });
        pdf.textWithLink("www.aaraconsultancy.com", 17, 223, {
          url: "https://www.aaraconsultancy.com",
        });
        pdf.setFont("helvetica", "bold");
        pdf.textWithLink("Vidyavihar:", 16, 145, {
          url: "https://www.google.com/search?sca_esv=588668658&rlz=1C1YTUH_enIN1058IN1059&sxsrf=AM9HkKn-VsXce-kL4pCxnEtDHMIxKTQWJA:1701937726300&q=Aara+Education+Consultancy+-+Study+Abroad+and+Career+Counsellor+in+Mumbai&ludocid=13256448219233310615&lsig=AB86z5VG0zrTuOFFKhDWbLFzKqot&kgs=20992ba1dc59403c&shndl=-1&shem=lsp&source=sh/x/kp/local/m1/1",
        });
        pdf.setFont("helvetica", "normal");
        pdf.textWithLink(
          "608, 6th Floor, Surya House, Road Number 7, opposite R.N Gandhi High School, near Vidyavihar",
          16,
          152,
          {
            url: "https://www.google.com/search?sca_esv=588668658&rlz=1C1YTUH_enIN1058IN1059&sxsrf=AM9HkKn-VsXce-kL4pCxnEtDHMIxKTQWJA:1701937726300&q=Aara+Education+Consultancy+-+Study+Abroad+and+Career+Counsellor+in+Mumbai&ludocid=13256448219233310615&lsig=AB86z5VG0zrTuOFFKhDWbLFzKqot&kgs=20992ba1dc59403c&shndl=-1&shem=lsp&source=sh/x/kp/local/m1/1",
          }
        );
        pdf.textWithLink(
          "station (east), Rajawadi Colony, Mumbai, Maharashtra 400077",
          16,
          158,
          {
            url: "https://www.google.com/search?sca_esv=588668658&rlz=1C1YTUH_enIN1058IN1059&sxsrf=AM9HkKn-VsXce-kL4pCxnEtDHMIxKTQWJA:1701937726300&q=Aara+Education+Consultancy+-+Study+Abroad+and+Career+Counsellor+in+Mumbai&ludocid=13256448219233310615&lsig=AB86z5VG0zrTuOFFKhDWbLFzKqot&kgs=20992ba1dc59403c&shndl=-1&shem=lsp&source=sh/x/kp/local/m1/1",
          }
        );
        pdf.setFont("helvetica", "bold");
        pdf.textWithLink("Andheri:", 16, 169, {
          url: "https://www.google.com/maps/place/Aara+Education+Consultancy+-+Study+Abroad+and+Career+Counsellor+in+Mumbai+(Andheri)/@19.1276504,72.8313149,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7a61fd49f59:0xdd4c127cfc050b59!8m2!3d19.1276504!4d72.8313149!16s%2Fg%2F11stvs32_3?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
        });
        pdf.setFont("helvetica", "normal");
        pdf.textWithLink(
          "DN Nagar Metro Station, 1308 Lotus Link Square, Besides, JP Rd, D.N.Nagar, Andheri West, Mumbai,",
          16,
          176,
          {
            url: "https://www.google.com/maps/place/Aara+Education+Consultancy+-+Study+Abroad+and+Career+Counsellor+in+Mumbai+(Andheri)/@19.1276504,72.8313149,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7a61fd49f59:0xdd4c127cfc050b59!8m2!3d19.1276504!4d72.8313149!16s%2Fg%2F11stvs32_3?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
          }
        );
        pdf.textWithLink("Maharashtra 400053", 16, 182, {
          url: "https://www.google.com/maps/place/Aara+Education+Consultancy+-+Study+Abroad+and+Career+Counsellor+in+Mumbai+(Andheri)/@19.1276504,72.8313149,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7a61fd49f59:0xdd4c127cfc050b59!8m2!3d19.1276504!4d72.8313149!16s%2Fg%2F11stvs32_3?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
        });
      }
      if (i < componentRefs.current.length - 1) {
        pdf.addPage();
      }
    }

    pdf.save("SWOT_Test_Report.pdf");

    setShowPDF(false);
  };

  useEffect(() => {
    if (responses.length < 19) {
      navigate("/");
    }
  }, [responses]);

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
                name="alt_phone"
                value={formData.alt_phone}
                onChange={handleInputChange}
                placeholder="Alternate Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-black border-black"
              />
              {errors.alt_phone && (
                <p className="text-red-500">{errors.alt_phone}</p>
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
        <button onClick={downloadPDF}>download</button>
      </div>
      {showPDF &&
        pdfFill &&
        ReactDOM.createPortal(
          <PDFTemplate
            refArray={componentRefs}
            userDetail={formData}
            data={pdfFill}
          />,
          document.body
        )}
    </div>
  );
}

export default SubmitForm;
