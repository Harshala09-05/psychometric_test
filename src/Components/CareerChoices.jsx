import React from 'react'
import logo from '../assets/img21.jpg';

function CareerChoices() {
    const careerData = [{
        mainCareer: "Psychology",
        description: "Psychology helps us understand how people think, feel, and behave. Psychologists work to improve mental health, develop new ways to help people, and study why we act the way we do. They play an important role in making sure people stay mentally healthy and happy.",
        example: "Going to a therapist to talk about your feelings or using relaxation techniques to deal with stress shows how psychology helps us in our daily lives.",
        
      },
      {
        mainCareer: "Biology",
        description: "Biology is the study of life and living organisms, covering topics such as genetics, ecology, and evolution. Biologists work to understand how organisms function, interact, and evolve over time.",
        example: "Studying how plants photosynthesize or how animals adapt to their environment are examples of biology in action."
      },
      {
        mainCareer: "Engineering",
        description: "Engineering applies scientific and mathematical principles to solve practical problems, from designing buildings to developing software. Engineers work in various fields like civil, mechanical, and software engineering.",
        example: "Creating a bridge structure that can withstand heavy loads or developing software to automate tasks are examples of engineering applications."
      }]
  return (
    <div className="relative w-[794px] min-h-[1123px] bg-white border border-black overflow-hidden">
    {/* Header */}
    <h1 className="text-4xl font-bold mb-6">Probable Career Choices</h1>
    
    {/* Loop through each career item in the array */}
    {careerData.map((careerData, index) => (
      <div key={index} className="mb-8">
        {/* Main Career Title and Description */}
        <h2 className="text-2xl font-semibold mb-4">{careerData.mainCareer}</h2>
        <p className="text-lg leading-relaxed mb-4">{careerData.description}</p>
        <p className="text-lg mb-8"><strong>Example:</strong> {careerData.example}</p>
      </div>
    ))}

    {/* Logo at Bottom */}
    <div className="flex justify-center mt-10">
      <img src={logo} alt="AARA Consultancy Logo" className="w-32 h-auto" />
    </div>
  </div>
  )
}

export default CareerChoices
