import React from 'react';
// import { RiShoppingCartLine } from "react-icons/ri";
// import { CiShoppingCart } from "react-icons/ci";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="navbar items-center  max-w-[1500px] mx-auto text-white rounded-3xl px-4 py-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow poppins ">
              <NavLink to={'/'} className='font-light text-black text-[18px] '>Home</NavLink>
              <NavLink to={'/more'} className='font-light text-black text-[18px] '>choose</NavLink>

            </ul>
          </div>
          <a className="btn btn-ghost text-xl bokor uppercase ">StyleUs.</a>
        </div>
        <div className="hidden  lg:flex justify-start items-center gap-10 mt-4 ">

          <NavLink to={'/'} className='font-light text-[18px]  '>Home</NavLink>
          <NavLink to={'/more'} className='font-light text-[18px] '>Choose</NavLink>
          <a className='font-light text-[18px]' href="#About">About</a>
          <a className='font-light text-[18px]' href="#Explore">Explore</a>
        </div>
        <NavLink to={'/cart'} className="navbar-end">
          <a className="btn  text-[#fff] bg-black ">CART<ShoppingCartIcon /></a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

// <CiShoppingCart />