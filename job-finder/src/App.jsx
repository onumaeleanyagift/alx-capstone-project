import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import WelcomePage from "./pages/WelcomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import JobCategory from "./pages/JobCategory";
import FillProfile from "./pages/FillProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/JobCategory" element={<JobCategory />} />
        <Route path="/FillProfile" element={<FillProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
