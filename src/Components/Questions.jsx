import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Questions() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const { responses, handleOptionChange } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true); // for loading spinner
  const [error, setError] = useState(null); // for error handling

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (responses.length === questions.length) {
      setIsSubmitting(true);
      navigate("/submit");
      setIsSubmitting(false);
    } else {
      toast.error("Please answer all questions.");
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/swot/questions`);
      setQuestions(response.data.questions_list);
    } catch (error) {
      setError("Failed to load questions. Please try again later.");
      toast.error("Error fetching questions.");
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion =
    questions.length > 0 ? questions[currentQuestionIndex] : null;

  const selectedOption = currentQuestion
    ? responses.find((response) => response.question_id === currentQuestion.id)
        ?.selected_option
    : null;

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    currentQuestion && (
      <div className="p-4">
        <div className="flex justify-end items-center mb-4 gap-10">
          <h2 className="text-lg font-bold">
            Questions Displayed: {currentQuestionIndex + 1} of{" "}
            {questions.length}
          </h2>
          <p>
            Questions Answered: {responses.length} / {questions.length}
          </p>
        </div>

        <div className="mb-4 bg-customGray p-4 md:p-16">
          <div className="flex items-start">
            <h3 className="font-semibold text-start text-lg">
              {currentQuestionIndex + 1}.
            </h3>
            <h3 className="font-semibold text-start text-lg min-h-10">
              {currentQuestion.question_text}
            </h3>
          </div>
          <div className="mt-6 flex flex-col gap-6 p-2">
            <div>
              <label className="flex items-start space-x-2 text-start">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={() => handleOptionChange(currentQuestion.id, "yes")}
                  className="mt-1"
                />
                <span>{currentQuestion.option_a}</span>
              </label>
            </div>
            <div>
              <label className="flex items-start space-x-2 text-start">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={() => handleOptionChange(currentQuestion.id, "no")}
                  className="mt-1"
                />
                <span>{currentQuestion.option_b}</span>
              </label>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              className="flex mt-20 px-4 py-3 text-xl bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900"
            >
              Back
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex mt-20 px-4 py-3 text-xl bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900"
              >
                Next
              </button>
            ) : isSubmitting ? (
              <div className="items-center justify-center flex mt-20 px-4 py-3 text-xl bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mr-2"></div>
                Submit
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex mt-20 px-4 py-3 text-xl bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Questions;
