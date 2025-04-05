import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      setWarning("Please enter a valid email address.");
      return;
    } else {
      setWarning("");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);

    if (!user) {
        alert("User does not exist. Please sign up.");
        navigate("/SignUp")
    } else if (user.password !== password) {
      alert("Incorrect password.");
    } else {
      alert("Login successful!");
      navigate("/Home"); 
    }
  };

  return (
    <div className="bg-white h-screen w-screen">
      <div className="lg:px-[30vw] md:px-[10vw] px-[5vw] py-40">
        {warning && <span className="text-red-600">{warning}</span>}
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-black border-opacity-50 rounded-[15px] mb-7 placeholder-[#5F5F61] bg-[#D0D0D0]"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-black border-opacity-50 rounded-[15px] mb-7 placeholder-[#5F5F61] bg-[#D0D0D0]"
        />

        <button
          onClick={handleSignIn}
          className="w-full bg-white border border-gray-300 text-black p-3 rounded-[15px] mb-7 hover:bg-black hover:text-white transition"
        >
          Sign In
        </button>

        <p className="text-center text-black mb-7 hover:underline transition">
          <a onClick={() => navigate("/SignUp")}>
            Don’t have an account? Sign up
          </a>
        </p>

        <div className="flex items-center mb-7">
          <hr className="flex-1 border-black" />
          <span className="mx-2 text-black font-bold">OR</span>
          <hr className="flex-1 border-black" />
        </div>

        <button className="w-full bg-white border border-gray-300 text-black p-3 rounded-[15px] flex items-center justify-center hover:bg-black hover:text-white transition">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;