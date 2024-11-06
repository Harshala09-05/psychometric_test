import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import PDFTemplate from "./PDFTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function SubmitForm() {
  const [showPDF, setShowPDF] = useState(true); // Control portal rendering
  const componentRefs = useRef([]); // Refs array for PDF pages

  const downloadPDF = async () => {
    setShowPDF(true); // Temporarily render the PDFTemplate

    // Wait a moment for the component to render in the portal
    await new Promise((resolve) => setTimeout(resolve, 100));

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    for (let i = 0; i < componentRefs.current.length; i++) {
      const componentRef = componentRefs.current[i];
      const canvas = await html2canvas(componentRef.current, { scale: 2 });
      const imageData = canvas.toDataURL("image/png");
      pdf.addImage(imageData, "PNG", 0, 0, 210, 297);
      if (i === componentRefs.current.length - 1) {
        // Place the "Visit AARA Consultancy" link directly under the counseling button

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
      }
      if (i < componentRefs.current.length - 1) {
        pdf.addPage();
      }
    }

    pdf.save("SWOT_Test_Report.pdf");

    // Clean up by hiding the portal after generation
    setShowPDF(false);
  };
  return (
    <div>
      {/* className="min-h-screen bg-white flex flex-col items-center pt-12" */}

      {/* Main Content */}
      <div className="max-h-screen  flex flex-col items-start pt-12 text-start">
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
        <form className="space-y-6  flex flex-col w-full">
          <div className="grid grid-cols-12 items-center ml-12 space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black col-span-11 md:col-span-8"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Phone no:
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black col-span-11 md:col-span-8 "
            />
            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Alternate Phone no (Parent):
            </label>
            <input
              type="text"
              placeholder="Alternate Phone Number"
              className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black col-span-11 md:col-span-8"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1 col-span-11 md:col-span-3 text-start">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black col-span-11 md:col-span-8"
            />
          </div>
          <Link
            to="/thankyou"
            className="w-fit bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 lg:py-6 lg:px-8 rounded ml-12 "
          >
            <button type="submit">Submit & Get Report</button>
          </Link>
        </form>

        {/* Render PDFTemplate in a portal if showPDF is true */}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={downloadPDF}
          className="mt-6 py-2 px-2 bg-gray-800 hover:bg-gray-700 text-white rounded "
        >
          Download as PDF (A4)
        </button>
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
