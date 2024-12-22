import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import styleJson from '../../public/styleus.json';



const Details = () => {

 // Get the data from the loader
 const details = useLoaderData();
 console.log(details)

 // Get the 'id' from the URL params
 // const { id } = useParams();
 // const idInt = parseInt(id);

 // // Ensure that 'details' is an array
 // if (!Array.isArray(details)) {
 //  return <div>Error: Details data is not an array.</div>;
 // }

 // // Find the specific estate detail by id
 // const detail = details.find(detail => detail.id === idInt);

 // // If no detail is found, return a message
 // if (!detail) {
 //  return <div>Detail not found</div>;
 // }
 return (
  <div >
   <h1>hiiiii </h1>
  </div>
 );
};

export default Details;