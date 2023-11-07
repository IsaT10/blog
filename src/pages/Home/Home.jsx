import * as React from 'react';
import HeroSection from '../../components/HeroSection';
import Blogs from '../../components/Blogs';
import NewsLetter from '../../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Blogs />
      <NewsLetter />
    </div>
  );
};

export default Home;
