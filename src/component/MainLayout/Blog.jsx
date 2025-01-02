import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Blogs from "./Blogs";
import { useCart } from "../../context/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Blog = () => {
 const [blogs, setBlogs] = useState([]);
 const { addToCart, cart } = useCart();
 const [searchTerm, setSearchTerm] = useState('');

 useEffect(() => {
  fetch("styleus.json")
   .then((res) => res.json())
   .then((data) => setBlogs(data));
 }, []);


 const handleCart = (product) => {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
   toast.error("This Item Already In Your Cart ! ");
   return;
  } else {
   addToCart(product);
   toast.success("Add To Cart ")
  }
 };

 // GSAP // 


 useGSAP(() => {

  gsap.from('#allCard > *', {
   y: -100,
   duration: 0.5,
   delay: 0.2,
   stagger: 0.1,
   opacity: 0,
  });
 }, []);



 return (
  <div id="allCard" className="bg-black lg:h-[3500px] h-full">
   <Toaster ></Toaster>
   <section className="lg:flex justify-between p-5 max-w-[1500px] mx-auto pt-16">
    <div className="content font-bold pak text-4xl uppercase text-white">
     let's Style.
    </div>
    <section className="search w-64 p-3 bg-white text-white flex justify-center items-center gap-2 rounded-2xl lg:mt-0 mt-5">
     <SearchIcon className="text-black" />
     <input
      type="text"
      placeholder="Search Here"
      className="outline-none text-black "
      onChange={(e) => setSearchTerm(e.target.value)}
     />
    </section>
   </section>
   <div className="h-[1px] bg-white max-w-[1500px] mx-auto mt-5"></div>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between items-center gap-7 lg:p-20 p-1">
    {blogs

     .filter((blog) => {
      return searchTerm.toLowerCase() === ''
       ? blog
       : blog.product_name.toLowerCase().includes(searchTerm);
     })

     .map((blog) => (
      <Blogs key={blog.id} blog={blog} handleCart={handleCart} />
     ))}
   </div>
  </div>
 );
};

export default Blog;
