import React from 'react';
import { Link } from "react-router-dom";

const Blogs = ({ blog, handleCart }) => {
 const { id, product_name, details, price } = blog;

 return (
  <div>
   <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
     <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl"
     />
    </figure>
    <div className="card-body items-center text-center pak font-medium uppercase">
     <h2 className="card-title">{product_name}</h2>
     <p>{details}</p>
     <p className="text-xl font-bold">Price : <span className="text-[#3d1414]">{price}</span></p>
     <div className="card-actions">
      <button onClick={() => handleCart(blog)} className="btn bg-black text-white">ADD TO CART</button>
      <Link to={`/details/${id}`}><button className="btn bg-black text-white">VIEW DETAILS</button></Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Blogs;
