import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FillProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    email: "",
    phone: "",
    photo: null,
    cv: null,
  });

  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setWarning("");
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setWarning(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== "" && value !== null
    );

    if (!allFieldsFilled) {
      setWarning("Please fill out all fields before saving.");
      return;
    }

    console.log("Form submitted:", formData);
    navigate("/Home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="fillProfile w-[300px]">
        <h2 className="text-center font-bold text-2xl mb-4">
          Fill out your profile
        </h2>

        {warning && (
          <div className="text-red-600 text-center text-sm mb-4 font-medium">
            {warning}
          </div>
        )}

        <div className="flex flex-col items-center mb-6">
          <label htmlFor="photo-upload" className="cursor-pointer">
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
              {formData.photo ? (
                <img
                  src={URL.createObjectURL(formData.photo)}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                    fill="#AEAEAE"
                  />
                </svg>
              )}
            </div>
            <span className="text-xs text-[#AEAEAE]">upload a photo</span>
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="profileInput space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-[#AEAEAE] font-normal border border-[#D0D0D0] rounded-lg"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-[#AEAEAE] font-normal border border-[#D0D0D0] rounded-lg"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-[#AEAEAE] font-normal border border-[#D0D0D0] rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-[#AEAEAE] font-normal border border-[#D0D0D0] rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-[#AEAEAE] font-normal border border-[#D0D0D0] rounded-lg"
          />

          <label htmlFor="cv-upload" className="block w-full cursor-pointer">
            <div className="w-full px-3 py-6 border border-[#D0D0D0] rounded-lg flex flex-col items-center justify-center text-[#AEAEAE] hover:bg-gray-50">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
                  fill="#1D1B20"
                />
              </svg>
              <span className="text-sm">
                {formData.cv ? formData.cv.name : "upload your CV"}
              </span>
            </div>
          </label>
          <input
            type="file"
            id="cv-upload"
            name="cv"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-[#47484C] text-white py-2 border-[#D0D0D0] rounded-lg hover:bg-[#D0D0D0] hover:text-black transition"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FillProfile;