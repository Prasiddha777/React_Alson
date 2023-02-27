import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center p-3 rounded-md shadow-md">
        <div className="logo">
          <img
            className="w-14 sm:w-20"
            src="https://cdn.dribbble.com/users/1940055/screenshots/7036128/media/5b9297b8cea95d57e8e68327a3b2d952.png?compress=1&resize=400x300"
            alt="main_logo"
          />
        </div>

        <div className="items">
          <div className="hamburger sm:hidden">
            <div className="w-5 h-1 bg-black m-2"></div>
            <div className="w-5 h-1 bg-black m-2"></div>
            <div className="w-3 h-1 bg-black m-2"></div>
          </div>
          <ul className="hidden sm:visible sm:space-x-14 sm:flex">
            <li className="px-3 py-2">Home</li>
            <li className="px-3 py-2">About</li>
            <li className="px-3 py-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
