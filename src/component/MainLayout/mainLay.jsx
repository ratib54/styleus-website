import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';

const MainLay = () => {
 const [loader, setLoader] = useState(true);
 const [data, setData] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await new Promise(resolve => setTimeout(() => resolve({ data: 'some data' }), 4000));
    setData(response.data);
    setLoader(false);
   } catch (error) {
    console.error("Error loading data:", error);
    setLoader(false);
   }
  };

  fetchData();
 }, []);

 if (loader) {
  return (
   <div className='bg-black'>
    <div className="flex  items-center justify-center  min-h-screen">
     <SpinnerDotted size={90} thickness={100} speed={100} color="rgba(57, 125, 172, 1)" />
    </div>
   </div>
  );
 }

 return (
  <div className="bg-[#000] h-[100%]">
   <div className="sticky top-0 bg-[#000] z-10">
    <Navbar />
   </div>
   <Outlet />
  </div>
 );
};

export default MainLay;
