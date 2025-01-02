import React from 'react';

const Touch = () => {
  return (
    <div className='lg:mt-52 p-6 sm:p-10 lg:p-24 lg:flex justify-around items-center h-auto'>
      <section className='text-title mb-6 sm:mb-8 lg:mb-0'>
        <h1 className='text-[6vw] sm:text-[5vw] lg:text-[3vw] text-white poppins font-bold'>
          Want To Get In Touch ?
        </h1>
      </section>

      <section className='border bg-white lg:px-5 py-3 sm:py-4 flex gap-6 rounded-2xl items-center flex-wrap'>
        <input
          type="email"
          placeholder='email@gmail.com'
          className='text-black outline-none w-full sm:w-80 lg:w-96 px-4 py-2 rounded-md'
        />
        <button className='px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 poppins text-[16px] sm:text-[18px] lg:text-[20px] bg-[#184161] text-white rounded-3xl'>
          Subscribe
        </button>
      </section>
    </div>
  );
};

export default Touch;
