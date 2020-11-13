import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import  FAQs from '../FAQs';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <FAQs />
      <Footer />
    </>
  );
}

export default Home;
