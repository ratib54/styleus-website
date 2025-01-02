import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="navbar items-center max-w-[1500px] mx-auto text-white rounded-3xl px-4 py-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-md shadow-lg z-[1] mt-3 w-52 p-3 transition-all ease-in-out duration-200 transform hover:scale-105"
                aria-labelledby="navbarDropdown"
                role="menu"
              >
                <li>
                  <NavLink
                    to="/"
                    className="font-light text-[18px] hover:text-blue-600 transition duration-200"
                    role="menuitem"
                    aria-label="Go to Home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/more"
                    className="font-light text-[18px] hover:text-blue-600 transition duration-200"
                    role="menuitem"
                    aria-label="Go to Choose"
                  >
                    Choose
                  </NavLink>
                </li>
              </ul>

            )}
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl bokor uppercase">StyleUs.</a>
        </div>

        {/* Desktop Navbar Items */}
        <div className="hidden lg:flex justify-start items-center gap-10 mt-4">
          <NavLink to="/" className="font-light text-[18px]">
            Home
          </NavLink>
          <NavLink to="/more" className="font-light text-[18px]">
            Choose
          </NavLink>
          <a className="font-light text-[18px]" href="#About">
            About
          </a>
          <a className="font-light text-[18px]" href="#Explore">
            Explore
          </a>
        </div>

        {/* Cart Button */}
        <NavLink to="/cart" className="navbar-end">
          <a className="btn text-[#fff] bg-black flex items-center gap-2">
            CART <ShoppingCartIcon />
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
