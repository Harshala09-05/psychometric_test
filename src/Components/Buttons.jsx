import React from "react";

function Buttons({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 lg:py-6 lg:px-8 rounded"
    >
      {text}
    </button>
  );
}

export default Buttons;
