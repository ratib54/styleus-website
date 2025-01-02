import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../public/styleus1.jpg";
import img2 from "../../../public/styleus2.jpg";
import img3 from "../../../public/styleus3.jpg";
import img4 from "../../../public/styleus4.jpg";
import img5 from "../../../public/img5.jpg";
import img6 from "../../../public/img6.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const images = [img1, img2, img3, img4, img5, img6]; // Dynamically manage the images array

const Explore = () => {
  useGSAP(() => {
    const explore = gsap.timeline({
      scrollTrigger: {
        trigger: ".Explore",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    explore.from('.explore-container', {
      x: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.2
    });
  });

  return (
    <div id='Explore' className='max-w-[1500px] mx-auto mt-10 h-full p-10'>

      <div className='text-center mt-24 mb-16 explore-container'>
        <h1 className='text-white poppins font-semibold text-[3vw] underline e-1'>Explore The Trend</h1>
        <h1 className='text-white poppins font-semibold text-[3vw] underline e-2'>&& Choose the Unique</h1>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[600px] flex justify-center items-center bg-black"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className='max-h-full max-w-96 mx-auto'>
            <img src={img} alt={`style image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Explore;
