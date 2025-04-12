import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;

  if (!job) {
    return <div className="p-4 text-red-500">Job not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pb-14 pt-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-[#EEA760] flex items-center gap-1 border-none focus:outline-none focus:ring-0 hover:text-black"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="flex-col items-center bg-white py-6 space-y-4">
        <h1 className="text-2xl font-bold text-black text-center">
          {job.title}
        </h1>
        <p className="text-[#B6B6B6] font-medium text-center pb-6">
          {job.company.display_name}
        </p>

        <div className="flex justify-around items-center gap-4 text-sm text-gray-500">
          <span className="flex flex-col items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80733 5.03738L29.2036 11.9285C30.4251 12.3044 30.564 13.9778 29.4209 14.5494L19.9287 19.2954C19.6545 19.4324 19.4321 19.6548 19.295 19.929L14.5492 29.4206C13.9777 30.5637 12.3045 30.4251 11.9287 29.2036L5.03687 6.80738C4.70242 5.72041 5.72036 4.70293 6.80733 5.03738Z"
                stroke="#1D1B20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {job.location.display_name}
          </span>
          <span className="flex flex-col items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3333 11.3337H8.78361C7.19679 11.3337 6.4028 11.3337 5.79671 11.6425C5.26359 11.9141 4.83046 12.3472 4.55881 12.8804C4.25 13.4865 4.25 14.2805 4.25 15.8673V23.8006C4.25 25.3874 4.25 26.1804 4.55881 26.7865C4.83046 27.3196 5.26359 27.7535 5.79671 28.0251C6.4022 28.3337 7.19524 28.3337 8.77896 28.3337H25.221C26.8048 28.3337 27.5967 28.3337 28.2021 28.0251C28.7353 27.7535 29.1698 27.3196 29.4415 26.7865C29.75 26.181 29.75 25.3891 29.75 23.8054V15.8626C29.75 14.2789 29.75 13.4859 29.4415 12.8804C29.1698 12.3472 28.7353 11.9141 28.2021 11.6425C27.5961 11.3337 26.8038 11.3337 25.2169 11.3337H22.6667M11.3333 11.3337H22.6667M11.3333 11.3337C11.3333 8.20405 13.8704 5.66699 17 5.66699C20.1296 5.66699 22.6667 8.20405 22.6667 11.3337"
                stroke="#1D1B20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Full-time
          </span>

          <span className="flex flex-col items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.08337 14.0574C7.08337 20.9308 13.0964 26.6148 15.7579 28.7941C16.1388 29.1059 16.3315 29.2637 16.6157 29.3437C16.837 29.406 17.1627 29.406 17.384 29.3437C17.6687 29.2636 17.8601 29.1073 18.2424 28.7943C20.9039 26.615 26.9166 20.9314 26.9166 14.058C26.9166 11.4568 25.8719 8.96191 24.0121 7.12261C22.1524 5.28331 19.6302 4.25 17.0002 4.25C14.3701 4.25 11.8476 5.28346 9.9879 7.12276C8.12816 8.96206 7.08337 11.4562 7.08337 14.0574Z"
                stroke="#1D1B20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1667 12.75C14.1667 14.3148 15.4352 15.5833 17 15.5833C18.5648 15.5833 19.8334 14.3148 19.8334 12.75C19.8334 11.1852 18.5648 9.91667 17 9.91667C15.4352 9.91667 14.1667 11.1852 14.1667 12.75Z"
                stroke="#1D1B20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Onsite
          </span>
        </div>
        <hr className="border border-[#5F5F61]" />
        <div className="pt-16">
          <h2 className="text-lg font-semibold mb-1">Job Description</h2>
          <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-wrap">
            {job.description}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-1">Location</h2>
          <p className="text-gray-600">{job.location.display_name}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[#EEA760] font-semibold text-lg">
            <p className="text-[#5F5F61]">Salary</p>
            {job.salary_is_predicted === "1"
              ? `$${parseInt(job.salary_max).toLocaleString()} /year`
              : "Salary not disclosed"}
          </div>

          <button
            className="bg-[#EEA760] hover:bg-black text-white py-2 px-4 rounded-2xl mt-4"
            onClick={() => navigate("/apply", { state: { job } })}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
