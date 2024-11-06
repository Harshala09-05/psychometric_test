import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [responses, setResponses] = useState({});

  const handleOptionChange = (questionId, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  return (
    <QuizContext.Provider value={{ responses, handleOptionChange }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
