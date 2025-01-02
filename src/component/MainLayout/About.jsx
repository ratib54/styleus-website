import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(() => {

    const explore = gsap.timeline({
      scrollTrigger: {
        trigger: ".Explore",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1
      },
    });

    explore.from('#text-details > *', {
      y: -200,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.1,
      opacity: 0,
    });
  }, []);

  return (
    <div className='About mt-24 p-6 sm:p-10 lg:p-24 max-w-screen-xl mx-auto rounded-3xl' id='About'>
      {/* Title Section */}
      <section className='text-title' id='text-title'>
        <h1 className='neue p-4 text-white text-[6vw] sm:text-[5vw] lg:text-[4vw] uppercase font-light flex items-center gap-4'>
          About <span className='bg-white text-black px-3 font-semibold rounded-3xl'>STYLEUS</span>
        </h1>
      </section>

      {/* Text Details Section */}
      <section className='text-white pak p-6 sm:p-10 lg:p-12 text-[4vw] sm:text-[3vw] lg:text-[2vw] font-thin text-about mt-7' id='text-details'>
        <div className='p-6 sm:p-10 lg:p-12 rounded-lg capitalize space-y-4 pak font-thin'>
          <p>Styleus is a modern fashion platform that brings the latest trends and styles directly to</p>
          <p>your fingertips. With a focus on quality and versatility, Styleus caters to a wide range of fashion preferences and body types.</p>
          <p>Whether you're looking for everyday wear or something for a special occasion, Styleus has something for every fashion lover.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
