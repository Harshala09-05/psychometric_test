import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [responses, setResponses] = useState([
    // { question_id: 1, selected_option: "Yes" },
    // { question_id: 2, selected_option: "No" },
    // { question_id: 3, selected_option: "Yes" },
    // { question_id: 4, selected_option: "No" },
    // { question_id: 5, selected_option: "Yes" },
    // { question_id: 6, selected_option: "No" },
    // { question_id: 7, selected_option: "Yes" },
    // { question_id: 8, selected_option: "No" },
    // { question_id: 9, selected_option: "Yes" },
    // { question_id: 10, selected_option: "No" },
    // { question_id: 11, selected_option: "Yes" },
    // { question_id: 12, selected_option: "No" },
    // { question_id: 13, selected_option: "Yes" },
    // { question_id: 14, selected_option: "No" },
    // { question_id: 15, selected_option: "Yes" },
    // { question_id: 16, selected_option: "No" },
    // { question_id: 17, selected_option: "Yes" },
    // { question_id: 18, selected_option: "No" },
    // { question_id: 19, selected_option: "Yes" },
  ]);

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
