import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Upload, ArrowLeft } from "lucide-react";
import useAppliedJobs from "../stores/useAppliedJobs";

const Apply = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
   const applyToJob = useAppliedJobs((state) => state.applyToJob);
  const job = state?.job;

  const [cvFile, setCvFile] = React.useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedCV = localStorage.getItem("userCV");
    if (savedCV) setCV(savedCV);
  }, []);

  if (!job) {
    return <div className="p-4 text-red-500">No job data found.</div>;
  }

   const handleApply = () => {
     applyToJob(job);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();


    setSuccessMessage("Application sent successfully!");
  
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/Home");
    }, 5000);
    
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mb-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-[#EEA760] flex items-center gap-1 border-none focus:outline-none focus:ring-0 hover:text-black"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-[#EEA760] rounded-2xl mb-2"></div>
        <h1 className="text-lg font-semibold">{job.title}</h1>
        <p className="text-sm text-[#B6B6B6]">{job.company.display_name}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Job Application
      </h2>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-6 text-center">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-2 border border-[#D0D0D0] rounded-xl placeholder-[#5F5F61] font-medium mb-4"
        />
        <input
          type="tel"
          placeholder="Your phone number"
          className="w-full p-2 border border-[#D0D0D0] rounded-xl placeholder-[#5F5F61] font-medium mb-4"
        />

        <div className="mt-10">
          <label className="block mb-6 font-medium">Your updated CV</label>

          <label className="border-2 border-black p-6 flex items-center rounded-xl cursor-pointer relative">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setCvFile(file);
                }
              }}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 40.5V27M27 27L20.25 31.5M27 27L33.75 31.5M29.25 6.75196C29.0351 6.75 28.7939 6.75 28.5181 6.75H18.4504C15.9302 6.75 14.6691 6.75 13.7065 7.24047C12.8598 7.6719 12.1719 8.35981 11.7405 9.20654C11.25 10.1691 11.25 11.4302 11.25 13.9504V40.0504C11.25 42.5707 11.25 43.8301 11.7405 44.7927C12.1719 45.6395 12.8598 46.3286 13.7065 46.76C14.6682 47.25 15.9278 47.25 18.4431 47.25L35.557 47.25C38.0723 47.25 39.33 47.25 40.2916 46.76C41.1384 46.3286 41.8286 45.6395 42.26 44.7927C42.75 43.8311 42.75 42.5734 42.75 40.058V20.9828C42.75 20.7067 42.7499 20.4651 42.7479 20.25M29.25 6.75196C29.8927 6.75781 30.2993 6.78115 30.6874 6.87434C31.1466 6.98457 31.5852 7.16685 31.9878 7.41357C32.4418 7.69177 32.8316 8.08159 33.6094 8.85938L40.6417 15.8917C41.42 16.67 41.807 17.0581 42.0852 17.5122C42.332 17.9148 42.5145 18.3538 42.6248 18.813C42.7179 19.201 42.7418 19.6076 42.7479 20.25M29.25 6.75196V13.05C29.25 15.5702 29.25 16.8295 29.7405 17.7921C30.1719 18.6388 30.8598 19.3286 31.7065 19.76C32.6682 20.25 33.9277 20.25 36.4431 20.25H42.7479M42.7479 20.25H42.7504"
                stroke="#1D1B20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cvFile && (
              <p className="mt-2 text-[#EEA760] text-md px-4">
                Attached: {cvFile.name}
              </p>
            )}
          </label>
        </div>

        <div>
          <p className="font-medium mb-2">
            Do you have experience working in this role?
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="experience" className="accent-black" />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="experience" className="accent-black" />
              No
            </label>
          </div>
        </div>

        <div>
          <p className="font-medium mb-2">
            Are you available to start within the next month?
          </p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="available" className="accent-black" />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="available" className="accent-black" />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleApply}
          type="submit"
          className="w-full bg-[#EEA760] hover:bg-black text-white py-2 rounded-lg mt-4"
        >
          Apply now
        </button>
      </form>
    </div>
  );
};

export default Apply;
