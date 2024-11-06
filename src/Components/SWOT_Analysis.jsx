import React from 'react'
import logo from '../assets/Aara_logo.png';

function SWOT_Analysis() {

    const SwOT = [{
        mainSWOT: "Strength",
        Fields: [ { label: 'Empathetic', description: 'Empathy fosters strong interpersonal relationships, understanding of diverse perspectives, and offering support to peers in need.' },
            { label: 'Data & Numbers', description: 'Being good with data and numbers helps you analyze information effectively, make informed decisions, and solve complex problems.' },
            { label: 'Research-oriented', description: 'Having a research-oriented mindset encourages curiosity, critical thinking, and the ability to find credible sources of information.' },
            { label: 'Communication Skills', description: 'Having strong communication skills allows you to interact effectively with peers, teachers, and professionals. You can present ideas clearly, collaborate efficiently, and resolve conflicts.' },
            { label: 'Creativity', description: 'Being creative sparks innovation, problem-solving, and thinking outside the box. This leads to unique solutions and approaches to challenges.' }]
      
        
      },
      {
        mainSWOT: "Weakness",
        Fields: [ { label: 'Biology', description: 'Empathy fosters strong interpersonal relationships, understanding of diverse perspectives, and offering support to peers in need.' },
            { label: 'Leadership Skills', description: 'Being good with data and numbers helps you analyze information effectively, make informed decisions, and solve complex problems.' },
            { label: 'Communication Skills', description: 'Having strong communication skills allows you to interact effectively with peers, teachers, and professionals. You can present ideas clearly, collaborate efficiently, and resolve conflicts.' }]
      },
      {
        mainSWOT: "Opportunity",
        Fields: [ { label: 'Empathetic', description: 'Empathy fosters strong interpersonal relationships, understanding of diverse perspectives, and offering support to peers in need.' },
            { label: 'Data & Numbers', description: 'Being good with data and numbers helps you analyze information effectively, make informed decisions, and solve complex problems.' },
            { label: 'Research-oriented', description: 'Having a research-oriented mindset encourages curiosity, critical thinking, and the ability to find credible sources of information.' },
            { label: 'Communication Skills', description: 'Having strong communication skills allows you to interact effectively with peers, teachers, and professionals. You can present ideas clearly, collaborate efficiently, and resolve conflicts.' },
            { label: 'Creativity', description: 'Being creative sparks innovation, problem-solving, and thinking outside the box. This leads to unique solutions and approaches to challenges.' },],
      }]
  return (
    <div className=" relative w-[794px] min-h-[1123px] flex flex-col   bg-white border   border-black overflow-hidden">
      <h2 className="text-3xl font-bold  text-left p-8 mt-8">SWOT Analysis</h2>
      
      <div className="mb-4 text-left p-8 flex-1">
        {SwOT.map(({mainSWOT,Fields}, index) => (
            <div key={index}>

                <h3 className="text-2xl font-semibold ">{mainSWOT}</h3>
                <ul className="mt-2 space-y-3 list-disc p-4">
            {Fields.map((field, fieldIndex) => (
          <li key={fieldIndex}>
            <strong>{field.label}:</strong> {field.description}
          </li>
        ))}
        </ul>
            </div>
        ))}
        
        
   
      </div>
      
      <div className="flex  m-auto p-8">
        <img src={logo} alt="Aara Consultancy Logo" className="w-32 h-auto " />
      </div>
    </div>
  )
}

export default SWOT_Analysis
