import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-screen bg-gray-100">
      <img
        src="./bg1.png"
        alt="Job Search"
        className="absolute h-screen w-screen object-cover z-1"
      />
      <div className="flex flex-row justify-center items-end h-screen">
        <button
          onClick={() => navigate("/SignUp")}
          className="relative bg-white text-black px-4 py-2 rounded-lg shadow-lg bottom-[2%] z-10 hover:bg-gray-200 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;