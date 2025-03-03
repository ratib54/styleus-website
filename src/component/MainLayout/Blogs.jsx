import React from 'react';
import { Link } from "react-router-dom";

const Blogs = ({ blog, handleCart }) => {
 const { id, product_name, price, image_url } = blog;

 return (
  <div>
   <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-36 mt-10 w-full h-72 rounded ">
     <img src={image_url} alt="Error" />
    </figure>
    <div className="card-body items-center text-center pak font-medium uppercase">
     <h2 className="card-title">{product_name}</h2>

     <p className="text-xl font-bold">Price : $ <span className="text-[#3d1414]">{price}</span></p>
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
