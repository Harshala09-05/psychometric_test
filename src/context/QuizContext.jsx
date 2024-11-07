import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [responses, setResponses] = useState([]);

  const handleOptionChange = (questionId, option) => {
    setResponses((prevResponses) => {
      // Check if the response for the question already exists
      const existingResponseIndex = prevResponses.findIndex(
        (response) => response.question_id === questionId
      );

      if (existingResponseIndex !== -1) {
        // Update the existing response
        const updatedResponses = [...prevResponses];
        updatedResponses[existingResponseIndex] = {
          question_id: questionId,
          selected_option: option,
        };
        return updatedResponses;
      } else {
        // Add a new response if it doesn't exist
        return [
          ...prevResponses,
          { question_id: questionId, selected_option: option },
        ];
      }
    });
  };

  return (
    <QuizContext.Provider value={{ responses, handleOptionChange }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
