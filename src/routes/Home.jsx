import React from 'react';
import Hero from '../component/MainLayout/  hero';
import Explore from '../component/MainLayout/Explore';
import About from '../component/MainLayout/About';
import Touch from '../component/MainLayout/Touch';
import Footer from '../component/MainLayout/Footer';

const Home = () => {
 return (
  <div>
   <Hero />
   <Explore />
   <About />
   <Touch />
   <Footer />
  </div>
 );
};

export default Home;