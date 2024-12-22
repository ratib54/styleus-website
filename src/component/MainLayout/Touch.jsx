import React from 'react';

const Touch = () => {
 return (
  <div className=' mt-52  p-24 flex justify-around items-center h-1/2  '>
    <section className='Text-title'>
        <h1 className='text-[3vw] text-white poppins font-bold'>Want To Get In Touch ?</h1>
    </section>
    <section className='border bg-white px-5 py-1 flex gap-6 rounded-2xl  items-center '>
     <input type="email" placeholder='email@gmail.com' className='text-black' />
     <button className='px-3 py-1 poppins text-[20px] bg-[#184161] text-white rounded-3xl'>Subscribe</button>
    </section>
  </div>
 );
};

export default Touch;