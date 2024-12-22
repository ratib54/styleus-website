import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Blogs from './Blogs';


const Blog = () => {
 const [blogs, setBlogs] = useState([]);
 const [cart, setCart] = useState([]);



 useEffect(() => {
  fetch('styleus.json')
   .then(res => res.json())
   .then(data => setBlogs(data));
 }, []);


 // Handle adding item to the cart

 const handleCart = (p) => {
  setCart([p]);
 };

 console.log(cart);

 return (
  <div className='bg-black h-full'>
   <section className='flex justify-between p-5 max-w-[1500px] mx-auto pt-16'>
    <div className="content font-bold pak text-4xl uppercase text-white">
     let's Style .
    </div>
    <section className='search w-64 p-3 bg-white text-white flex justify-center items-center gap-2 rounded-2xl'>
     <SearchIcon className='text-black' />
     <input type="text" placeholder='Search Here' className='outline-none text-black' />
    </section>
   </section>
   <div className='h-[1px] bg-white max-w-[1500px] mx-auto mt-5'></div>

   <div className='grid grid-cols-3 justify-between items-center gap-7 p-20'>
    {
     blogs.map(blog => (
      <Blogs
       key={blog.id}
       blog={blog}
       handleCart={handleCart}
      />
     ))
    }
   </div>
  </div>
 );
};

export default Blog;
