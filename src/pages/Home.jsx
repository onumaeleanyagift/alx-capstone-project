import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [bookmarked, setBookmarked] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const app_id = "34d6243a";
  const app_key = "f559a6f5d7f3b6fc769e287ba2a0f998";

  
  const fetchJobs = (query = "javascript developer") => {
    fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=20&what=${query}&content-type=application/json`
    )
      .then((res) => res.json())
      .then((data) => setJobs(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchJobs(searchQuery);
    }
  };

  return (
    <div className="px-2 py-6 md:p-10 lg:p-10">
      <form
        onSubmit={handleSearch}
        className="flex gap-2 mb-4 md:mt-20 lg:mt-24"
      >
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="px-4 bg-[#5F5F61] text-white rounded-lg hover:bg-[#333]"
        >
          Search
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-10">Available jobs</h2>

      {jobs.map((job) => (
        <div
          key={job.id}
          className="border rounded-xl p-4 mb-3 flex justify-between items-start shadow-sm cursor-pointer hover:bg-gray-50"
          onClick={() => navigate(`/Job/${job.id}`, { state: { job } })}
        >
          <div className="flex-1">
            <h3 className="font-semibold text-sm md:text-lg lg:text-lg">
              {job.title}
            </h3>
            <p className="text-[#B6B6B6] text-xs md:text-sm lg:text-sm">
              {job.company.display_name}
            </p>
            <div className="flex space-x-2 my-1">
              <span className="bg-[#5F5F61] text-xs text-white px-2 py-1 rounded">
                Full-time
              </span>
              <span className="bg-[#5F5F61] text-xs text-white px-2 py-1 rounded">
                On site
              </span>
            </div>
            <p className="text-[#EEA760] font-semibold">
              {job.salary_is_predicted === "1"
                ? `$${parseInt(job.salary_max).toLocaleString()} /year`
                : "Salary not disclosed"}
            </p>
          </div>
          <div
            className="flex flex-col gap-16 items-end ml-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Bookmark
              className={`cursor-pointer ${
                bookmarked[job.id] ? "fill-current" : ""
              }`}
              onClick={() => toggleBookmark(job.id)}
            />
            <p className="text-xs text-[#B6B6B6]">
              {new Date(job.created).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;