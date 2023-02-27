import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleHamburgerIcon = () => {
    setOpenHamburger((prev) => !prev);
  };

  return (
    <div>
      {openHamburger && (
        <div className="mbl_nav w-screen h-screen bg-red-700">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      )}
      <div className="navbar flex justify-between items-center p-3 rounded-md shadow-md">
        <div className="logo">
          <img
            className="w-14 sm:w-20"
            src="https://cdn.dribbble.com/users/1940055/screenshots/7036128/media/5b9297b8cea95d57e8e68327a3b2d952.png?compress=1&resize=400x300"
            alt="main_logo"
          />
        </div>

        <div
          className="items cursor-pointer"
          onClick={() => handleHamburgerIcon}
        >
          <div className="hamburger  sm:hidden">
            <div className="w-5 h-1 bg-black m-2"></div>
            <div className="w-5 h-1 bg-black m-2"></div>
            <div className="w-3 h-1 bg-black m-2"></div>
          </div>
          <ul className="hidden sm:visible sm:space-x-14 sm:flex">
            <Link
              to="/"
              className={`${
                location.pathname == "/" ? "text-pink-400" : "text-black"
              }`}
            >
              <li className="px-3 py-2">Home</li>
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname == "/about" ? "text-pink-400" : "text-black"
              }`}
            >
              <li className="px-3 py-2">About</li>
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname == "/contact" ? "text-pink-400" : "text-black"
              } `}
            >
              <li className="px-3 py-2">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
