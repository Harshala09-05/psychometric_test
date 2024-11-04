import React from 'react'

function Buttons({text, onClick}) {
  return (
    <button
    onClick={onClick}
    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-6 px-8 rounded"
  >
    {text}
  </button>

  )
}

export default Buttons
