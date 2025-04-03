import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3">
        <div className="bgImage">
          <img src="./src/assets/bg1.png" alt="Job Search" />
          <button
            onClick={() => navigate("/SignUp")}
            className="bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
