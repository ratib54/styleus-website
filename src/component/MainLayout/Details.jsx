import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
 const details = useLoaderData();
 const { id } = useParams();
 const idInt = parseInt(id, 10);

 if (!details) {
  return <div>Loading...</div>;
 }

 if (!Array.isArray(details)) {
  return <div>Error: Details data is not an array. Data type: {typeof details}</div>;
 }

 if (isNaN(idInt)) {
  return <div>Error: Invalid ID format</div>;
 }

 const detail = details.find(detail => detail.id === idInt);

 if (!detail) {
  return <div>Detail not found</div>;
 }

 return (
  <>
   <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 items-center p-6 lg:p-24'>
    {/* Text Section */}
    <div className='text-white space-y-5 max-w-lg'>
     <h1 className='text-3xl sm:text-4xl md:text-5xl pak'>{detail.product_name}</h1>
     <p className='max-w-xl text-sm sm:text-base lg:text-lg'>{detail.details}</p>
     <p className='text-red-700 font-bold text-lg sm:text-xl'>Price: ${detail.price}</p>
    </div>

    {/* Image Section */}
    <div className='flex justify-center items-center'>
     <img
      className='rounded-xl w-full max-w-xs sm:max-w-md md:max-w-lg'
      src={detail.image_url}
      alt={detail.product_name}
     />
    </div>
   </div>

   {/* Choose Button */}
   <div className='flex justify-center pb-10 '>
    <Link to='/more'>
     <button className="bg-white text-black px-8 py-3 btn border-black rounded-md w-full sm:w-auto mt-6 pak font-bold text-base sm:text-lg text-center">
      Choose
     </button>
    </Link>
   </div>
  </>
 );
};

export default Details;
