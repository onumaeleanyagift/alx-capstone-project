import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobCategory = () => {
  const navigate = useNavigate();

  const categories = [
    "Marketing",
    "Design",
    "Finance",
    "HR",
    "Sales",
    "Engineering",
    "Analytics",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [warning, setWarning] = useState("");

  const handleSelect = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
    setWarning(""); // clear warning on selection
  };

  const handleFindJobs = () => {
    if (selectedCategories.length === 0) {
      setWarning("Please select at least one category.");
      return;
    }

    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );

    navigate("/FillProfile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-5">
      <h2 className="text-2xl font-bold">Select your job category</h2>
      <p className="text-[#5F5F61] mb-6">Select one or more category</p>

      {warning && (
        <span className="text-red-600 mb-4 font-medium">{warning}</span>
      )}

      <div className="category w-full max-w-md">
        {categories.map((category) => (
          <div
            key={category}
            className={`flex items-center p-4 my-4 mb-3 mx-5 rounded-lg border ${
              selectedCategories.includes(category) ? "text-black" : "bg-white"
            } cursor-pointer transition`}
            onClick={() => handleSelect(category)}
          >
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-full border border-[#47484C] ${
                selectedCategories.includes(category)
                  ? "bg-[#47484C] text-white"
                  : "bg-transparent"
              }`}
            >
              {selectedCategories.includes(category) && "✓"}
            </span>

            <span className="px-10">{category}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleFindJobs}
        className="mt-6 w-full max-w-md p-4 bg-[#47484C] text-white font-bold text-lg rounded-lg border border-[#D0D0D0]"
      >
        Find jobs
      </button>
    </div>
  );
};

export default JobCategory;