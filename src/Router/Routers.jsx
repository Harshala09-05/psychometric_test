import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Content from "../Components/Content";
import About from "../Components/About";
import Table from "../Components/Table";
import Questions from "../Components/Questions";
import SubmitForm from "../Components/SubmitForm";
import { QuizProvider } from "../context/QuizContext";

function Routers() {
  return (
    <BrowserRouter>
      <QuizProvider>
        {/* Wrap routes with QuizProvider */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Content />} />
            <Route path="about" element={<About />} />
            <Route path="questions" element={<Questions />} />
            <Route path="submit" element={<SubmitForm />} />
            <Route path="table" element={<Table />} />
            <Route path="thankyou" element={<Content />} />
          </Route>
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default Routers;
