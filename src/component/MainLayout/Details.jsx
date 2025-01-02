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
   <div className='flex justify-centre gap-20 items-center p-32  '>
    <div className='text-white space-y-5'>
     <h1 className='text-[30px] pak' >{detail.product_name}</h1>
     <p className='max-w-xl'>{detail.details}</p>
     <p className='text-red-700 font-bold'>Price: ${detail.price}</p>
    </div>
    <div className='grid grid-cols-1 justify-center items-center'>
     <img className='rounded-xl w-full max-w-xs sm:max-w-md md:max-w-lg' src={detail.image_url} alt={detail.product_name} />
     <Link to={'/more'}>
      <button className="bg-white text-black px-10 py-3 btn border-black rounded ml-[5%] w-96  mt-10 pak font-bold text-[15px] text-center">
       Choose
      </button>
     </Link>
    </div>
   </div>
  </>
 );
};

export default Details;
