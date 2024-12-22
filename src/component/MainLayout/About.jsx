import React from 'react';
// import { PiArrowBendRightDownFill } from "react-icons/pi";
// import { PiArrowBendRightDownFill } from "react-icons/pi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const About = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-title",
        // scroller: ".smooth-scroll",
        markers: true,
        start: "top top",
        end: "+=150%",
      },
    })

  });

  return (
    <div className='About  mt-24 p-10 max-w-[1600px] mx-auto rounded-3xl '>




      <section className='text-title' >

        <h1 className='neue p-4 text-white text-[5vw] uppercase font-light flex items-center gap-4'>About <span className='bg-white text-black px-3 font-semibold rounded-3xl'> STYLEUS</span><span className='text-[2vw]'></span></  h1>
      </section>

      <section className='text-white pak p-10 text-[4vw] font-thin text-about mt-7 '>

        <div className='p-10 rounded  capitalize space-y-1 pak font-thin text-[2vw]'>
          <p> Styleus is a modern fashion platform that brings the latest trends and styles directly to </p>
          <p>your fingertips. With a focus on quality and versatility, Styleus caters to a wide range of fashion preferences and body types.The website Whether you're looking for  </p>
          <p>everyday wear or something for a special occasion, Styleus has something for every fashion lover.</p>
        </div>

      </section>
    </div>
  );
};

export default About;

// <PiArrowBendRightDownFill />