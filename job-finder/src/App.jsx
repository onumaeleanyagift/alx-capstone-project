import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import JobDetails from "./components/JobDetails";
import "./index.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/JobDetails/:id" element={<JobDetails />} />
        </Routes>
      </Router>
  );
}

export default App;
