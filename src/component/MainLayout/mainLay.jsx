import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


const MainLay = () => {
 return (
  <div className='bg-[#000] h-[100%] '>
   <div className='sticky 3'>
    <Navbar  ></Navbar>
   </div>
   <Outlet />
  </div>
 );
};

export default MainLay;