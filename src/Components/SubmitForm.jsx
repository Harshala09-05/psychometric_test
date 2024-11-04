import React from 'react'

function SubmitForm() {
  return (
    <div >
   {/* className="min-h-screen bg-white flex flex-col items-center pt-12" */}
   
    {/* Main Content */}
    <div className="min-h-screen bg-yellow-100 flex flex-col items-start pt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Well Done!</h1>
      <p className="text-lg text-gray-700 mb-2">You have Successfully Completed the test.</p>
      <p className="text-lg text-gray-700 mb-8">Please Enter Your Details to Get the Report of the Assessment</p>

      {/* Form */}
      <form className="space-y-6 bg-blue-400 flex flex-col w-full">
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
<div className='flex justify-between text-left'>
<div className='flex flex-col ml-8 w-2/5 bg-pink-300'>
  <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
  <label className="block text-sm font-medium text-gray-700 mb-1">Phone no:</label>
  <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone no (Parent):</label>


</div>
<div className='flex flex-col w-3/5 bg-orange-400'>
<input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> 
          <input
            type="text"
            placeholder="Phone"
            className="w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <input
            type="text"
            placeholder="Alternate Phone Number"
            className="w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

</div>
</div>
        <button
          type="submit"
          className="w-full py-3 bg-gray-800 text-white text-lg font-semibold rounded-md hover:bg-gray-900"
        >
          Submit & Get Report
        </button>
      </form>
    </div>
  </div>
  )
}

export default SubmitForm
