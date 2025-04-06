import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import WelcomePage from "./pages/WelcomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import JobCategory from "./pages/JobCategory";
import FillProfile from "./pages/FillProfile";
import Home from "./pages/Home";
import JobDetails from "./components/JobDetails";
import Apply from "./pages/Apply";
import Profile from "./pages/Profile";

function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavFrom = ["/Profile", "/Home", "/Job", "/apply"];
  const shouldShowNav = showNavFrom.some((path) =>
    location.pathname.startsWith(path)
  );

  if (!shouldShowNav) return null;

  return (
    <div className="hidden md:flex fixed top-0 left-0 w-full bg-white justify-around px-6 py-4 z-50">
      <button
        onClick={() => navigate("/Home")}
        className="text-[#47484C] font-semibold focus:outline-none focus:ring-0
 hover:text-[#EEA760] transition border-none"
      >
        HOME
      </button>
      <button
        onClick={() => navigate("/Profile")}
        className="text-[#47484C] font-semibold focus:outline-none focus:ring-0
 hover:text-[#EEA760] transition border-none"
      >
        PROFILE
      </button>
    </div>
  );
}

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavFrom = ["/Profile", "/Home", "/Job", "/apply"];

  const shouldShowNav = showNavFrom.some((path) =>
    location.pathname.startsWith(path)
  );

  if (!shouldShowNav) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full bg-[#47484C] flex justify-around py-2 z-50">
      <button
        className="bg-transparent border-none focus:outline-none focus:ring-0 hover:scale-110 ransition-transform duration-200"
        onClick={() => navigate("/Home")}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 27.5V15H18.75V27.5M3.75 11.25L15 2.5L26.25 11.25V25C26.25 25.663 25.9866 26.2989 25.5178 26.7678C25.0489 27.2366 24.413 27.5 23.75 27.5H6.25C5.58696 27.5 4.95107 27.2366 4.48223 26.7678C4.01339 26.2989 3.75 25.663 3.75 25V11.25Z"
            stroke="#F3F3F3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        className="bg-transparent border-none focus:outline-none focus:ring-0 hover:scale-110 ransition-transform duration-200"
        onClick={() => navigate("/Profile")}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 26.25V23.75C25 22.4239 24.4732 21.1522 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1522 5 22.4239 5 23.75V26.25M20 8.75C20 11.5114 17.7614 13.75 15 13.75C12.2386 13.75 10 11.5114 10 8.75C10 5.98858 12.2386 3.75 15 3.75C17.7614 3.75 20 5.98858 20 8.75Z"
            stroke="#F3F3F3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/JobCategory" element={<JobCategory />} />
          <Route path="/FillProfile" element={<FillProfile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </Router>
    </>
  );
}

export default App;
