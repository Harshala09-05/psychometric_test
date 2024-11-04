import React, { useState } from "react";

function Questions() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex flex-col  max-h-screen ">
      <div className="flex justify-end px-12 p-4 mt-4 text-xl ">
        <span className="mr-10">Questions Displayed: 19</span>
        <span>Questions Answered: 3 / 19</span>
      </div>
      <div className=" max-w-full  mx-6  p-20 bg-customGray">
        <h2 className=" text-lg font-semibold h-auto mb-10">
          1. Picture yourself in a scenario where you need to calculate
          percentages and estimate costs in your head quickly. How confident do
          you feel in your ability to make quick calculations?
        </h2>
        <div className="space-y-4  ">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="confidence"
              value="confident"
              checked={selectedOption === "confident"}
              onChange={handleOptionChange}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>
              I feel confident in my ability to handle numbers and quickly
              calculate percentages and estimate costs.
            </span>
          </label>
          <label className="flex items-center space-x-2 ">
            <input
              type="radio"
              name="confidence"
              value="notConfident"
              checked={selectedOption === "notConfident"}
              onChange={handleOptionChange}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>
              I'm not particularly confident in my ability to handle math.
            </span>
          </label>
        </div>
        <button className="flex mt-20 px-4 py-3 text-xl bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900">
          Next
        </button>
      </div>
    </div>
  );
}

export default Questions;
