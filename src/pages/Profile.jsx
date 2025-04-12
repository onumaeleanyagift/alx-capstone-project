import React from "react";
import useAppliedJobs from "../stores/useAppliedJobs";
import { useNavigate } from "react-router-dom";
import useProfileStore from "../stores/useProfileStore";

const Profile = () => {
    const { name, role, image } = useProfileStore((state) => state.profile);
    const appliedJobs = useAppliedJobs((state) => state.appliedJobs);
    const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto md:mt-20 lg:mt-20">
      <div className="flex flex-col items-center mb-6">
        <img
          src={image}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border border-black"
        />
        <h2 className="mt-2 font-bold text-lg">{name}</h2>
        <p className="text-gray-600">{role}</p>
        <div className="mt-6 flex gap-2">
          <button className="px-6 py-1 border border-[#EEA760] text-[#EEA760] rounded-xl">
            Edit profile
          </button>
          <button
            className="px-8 py-1 border border-red-500 text-red-500 rounded-xl"
            onClick={() => navigate("/SignIn")}
          >
            Logout
          </button>
        </div>
      </div>

      <hr className="mb-4 border-[#5F5F61]" />

      <h3 className="font-semibold text-2xl pt-6 mb-4">My Job Application</h3>
      <div className="space-y-4">
        {appliedJobs.length === 0 ? (
          <p className="text-sm text-gray-500">No job applications yet.</p>
        ) : (
          appliedJobs.map((job, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#EEA760] rounded-md"></div>
                <div>
                  <p className="font-semibold text-lg">{job.title}</p>
                  <p className="text-[#B6B6B6] text-sm">
                    {job.company.display_name}
                  </p>
                </div>
              </div>
              <span className="text-xs bg-[#D9D9D9] text-black px-3 py-1 rounded-full">
                Pending
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;