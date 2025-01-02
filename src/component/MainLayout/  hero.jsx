import React from 'react';
import video from "../../../public/videoop1.mp4"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Hero = () => {
   useGSAP(() => {
      gsap.from('.text-content span', {
         y: 50,
         opacity: 0,
         duration: 1,
         delay: 0.7,
         stagger: 0.15
      })
   })

   return (
      <div>
         <section className='max-w-[1500px] mx-auto mt-9 rounded-3xl'>
            <div className='relative text-[#ffffffe0] poppins flex justify-center items-center rounded-3xl'>
               <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  className='rounded-3xl w-full h-auto object-cover'
               />
               <h1 className='text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] uppercase font-bold text-content neue absolute mt-[15%] sm:mt-[10%] md:mt-[8%] lg:mt-[6%] leading-[0.8] space-x-3'>
                  <span className='inline-block'>S</span>
                  <span className='inline-block'>T</span>
                  <span className='inline-block'>Y</span>
                  <span className='inline-block'>L</span>
                  <span className='inline-block'>E</span>
                  <span className='inline-block'>U</span>
                  <span className='inline-block'>S</span>
               </h1>
            </div>
         </section>
      </div>
   );
};

export default Hero;
