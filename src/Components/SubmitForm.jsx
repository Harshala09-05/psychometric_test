import React from "react";
import { Link } from "react-router-dom";

function SubmitForm() {
  return (
    <div>
      {/* className="min-h-screen bg-white flex flex-col items-center pt-12" */}

      {/* Main Content */}
      <div className="max-h-screen  flex flex-col items-start pt-12 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 ml-12">
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
          {/* <div className="text-left flex justify-evenly">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            placeholder="Name"
            className="w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone no:</label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone no (Parent):</label>
          <input
            type="text"
            placeholder="Alternate Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
          <div className="flex justify-between text-left ">
            <div className="flex flex-col ml-12 w-2/5  space-y-10">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name:
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone no:
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alternate Phone no (Parent):
              </label>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
            </div>
            <div className="flex flex-col w-3/5  mr-12 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black "
              />
              <input
                type="text"
                placeholder="Alternate Phone Number"
                className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-auto px-4 py-2 border rounded-md focus:outline-black border-black"
              />
            </div>
          </div>
          <Link to="/thankyou"  className="w-fit p-6 ml-12 bg-gray-800 text-white text-lg font-semibold rounded-md hover:bg-gray-900">
            <button
              type="submit"
             
            >
              Submit & Get Report
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;
