import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../public/styleus1.jpg"
import img2 from "../../../public/styleus2.jpg"
import img3 from "../../../public/styleus3.jpg"
import img4 from "../../../public/styleus4.jpg"
import img5 from "../../../public/img5.jpg"
import img6 from "../../../public/img6.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import gsap from 'gsap';

const Explore = () => {


  useGSAP(() => {
    gsap.from('.text-container-1 h1', {
      x: 100,
      stagger: 0.3,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.text-container-1 h1',
        markers: true
      }

    })
  })


  return (
    <div id='Explore' className='max-w-[1500px] mx-auto mt-10 h-full p-10  '>

      <div className='text-center mt-24 mb-16 text-container-1'>
        <h1 className='text-white poppins font-semibold text-[3vw] underline'>Explore The trend</h1>
        <h1 className='text-white poppins font-semibold text-[3vw] underline'>&& Choose the Unique</h1>
      </div>






      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[600px] flex justify-center items-center  bg-black"
      >

        <SwiperSlide className=' max-h-full max-w-96 mx-auto  '>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='max-h-full max-w-96 mt-7 mx-auto'>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='max-h-full max-w-96 mx-auto  '>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='max-h-full max-w-96 mx-auto mt-12  '>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='max-h-full max-w-96 mx-auto  '>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='max-h-full max-w-96 mx-auto mt-7 '>
          <img src={img6} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Explore;