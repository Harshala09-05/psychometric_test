import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const questions = [
  {
    id: 1,
    question:
      "Picture yourself in a scenario where you need to calculate percentages and estimate costs in your head quickly. How confident do you feel in your ability to make quick calculations?",
    option_a:
      "I feel confident in my ability to handle numbers and quickly calculate percentages and estimate costs.",
    option_b: "I'm not particularly confident in my ability to handle math.",
  },
  {
    id: 2,
    question:
      "Imagine you're at a networking event, and someone starts discussing investment avenues and market trends. How interested are you to join the conversation and learn more?",
    option_a:
      "I'm interested to join the conversation, give my own inputs and learn more about investment strategies and market trends.",
    option_b: "I'm not particularly interested in joining the conversation.",
  },
  {
    id: 3,
    question:
      "You're participating in a group discussion where you need to present your ideas. How confident are you in your communication skills to express yourself effectively?",
    option_a:
      "I express myself freely and feel good about talking with others.",
    option_b:
      "Public speaking and speaking my heart makes me nervous and anxious.",
  },
  {
    id: 4,
    question:
      "You're involved in selling a product where you need to convince others to buy it. How skilled do you feel in convincing people?",
    option_a:
      "I can come up with new innovative ideas and strategies to convince people.",
    option_b:
      "I don't think I would be comfortable or impactful when it comes to convincing people.",
  },
  {
    id: 5,
    question:
      "You're leading a team on a project and need to delegate tasks effectively. How confident are you in your ability to manage and guide others?",
    option_a:
      "I am sure about my ability to manage and guide others effectively.",
    option_b:
      "I am not entirely confident in my ability to lead and delegate tasks.",
  },
  {
    id: 6,
    question:
      "How interested are you in exploring Marketing, Finance, HR, Operations, and business as a whole?",
    option_a: "I want to explore business as a whole.",
    option_b: "Not really thought into it. Business does not interest me.",
  },
  {
    id: 7,
    question: "Do you like reading and enjoy studying theory subjects?",
    option_a:
      "Yes, I like reading, and it helps me understand the subject properly.",
    option_b: "No, I prefer practical experiences.",
  },
  {
    id: 8,
    question:
      "Overall, are you interested in knowing more about current affairs and politics by reading newspapers?",
    option_a: "Yes, I like to be updated about current affairs.",
    option_b: "Not really; none of the above interests me.",
  },
  {
    id: 9,
    question:
      "Do you consider yourself an avid traveller and not being homesick?",
    option_a:
      "Yes, I enjoy travelling, and it helps me get my mind off everything.",
    option_b: "I like travelling while making sure it’s not that frequent.",
  },
  {
    id: 10,
    question:
      "Do you consider yourself a very helpful person who likes to do good to others, resolve their problems, and be involved in NGO activities?",
    option_a:
      "Yes, I love helping people out. Money does not really change anything for me, and I like getting involved in NGO activities.",
    option_b:
      "I am highly ambitious but also kind at heart while prioritizing my financial situation more.",
  },
  {
    id: 11,
    question:
      "Do you enjoy studying biology and finding out how living organisms work, from genes to the human body?",
    option_a:
      "Yes, I love studying biology and understanding how living organisms function, starting from genes to the other intricacies of the human body.",
    option_b: "Not really. Biology is complex, and it puzzles me.",
  },
  {
    id: 12,
    question:
      "You're trying to understand how a complicated machine works by taking it apart and finding new ways to fix it. How excited are you to learn more about physics and technology?",
    option_a:
      "I am excited to understand the mysteries behind the forces of nature and the possibilities brought about by Technology.",
    option_b: "No, Physics and Technology are not really my field.",
  },
  {
    id: 13,
    question:
      "Are you interested in researching and digging deeper into subjects of your interest through reading or using search engines such as Google, reading articles, or watching videos on platforms like YouTube?",
    option_a:
      "Yes, I have the habit of researching and diving deep into any topics of my interest.",
    option_b:
      "Not really. I get confused when I see too much information in one place.",
  },
  {
    id: 14,
    question:
      "You're in chemistry class, studying chemical formulas. Do you find it fascinating and enjoy learning how these formulas are used to make medicines?",
    option_a:
      "Yes, I find chemistry fascinating, especially learning about chemical formulas and reactions that are used to make medicines.",
    option_b: "Chemistry isn't really my thing.",
  },
  {
    id: 15,
    question:
      "Are you passionate about culinary arts, and how motivated are you to continuously improve your cooking techniques and create memorable dining experiences for others?",
    option_a:
      "Cooking is my passion, and I'm always looking for ways to improve my dishes!",
    option_b: "I like to eat and am not really into cooking.",
  },
  {
    id: 16,
    question:
      "You're looking at new ideas in art and design, trying to draw things that inspire you. How excited are you to unleash your creativity?",
    option_a:
      "I'm thrilled to explore new ideas and let my creativity flow by creating innovative designs.",
    option_b: "I usually prefer readymade ideas and cannot think creatively.",
  },
  {
    id: 17,
    question:
      "Are you interested in knowing and working in the field of sports, fitness, food, and exercise?",
    option_a: "Yes, I can see myself working in this field.",
    option_b:
      "I would be interested to know about this only for general knowledge. I do not wish to pursue a career field relating to the same.",
  },
  {
    id: 18,
    question:
      "Are you interested in working in the film industry as a director, editor, actor, or screenwriter? Do you think you have the creative mind to work in the movies?",
    option_a:
      "Yes, I am a great storyteller, and I like watching movies. I would like to know more about it.",
    option_b:
      "No, Not at all. I don’t possess enough creativity to be a part of the film industry.",
  },
  {
    id: 19,
    question:
      "What level of interest do you have in experiencing new places, serving guests in hotels, and immersing yourself in different cultures?",
    option_a: "I'm itching to travel, serve guests, and soak in new cultures!",
    option_b: "Exploring new places and serving guests isn't my cup of tea.",
  },
];

function Questions() {
  const navigate = useNavigate();
  // Load saved responses from localStorage only once
  const { responses, handleOptionChange } = useQuiz();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      navigate("/submit");
    } else {
      // alert("Please answer all questions before submitting.");
      toast.error("Please answer all questions.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = responses.find(
    (response) => response.question_id === currentQuestion.id
  )?.selected_option;
  return (
    <div className="p-4">
      <div className="flex justify-end items-center mb-4 gap-10">
        <h2 className="text-lg font-bold">
          Questions Displayed: {currentQuestionIndex + 1} of {questions.length}
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
            {currentQuestion.question}
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
            <div className=" items-center justify-center  flex mt-20 px-4 py-3 text-xl bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
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
  );
}

export default Questions;
