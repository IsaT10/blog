import * as React from 'react';
import HeroSection from '../../components/HeroSection';
import Blogs from '../../components/Blogs';
import NewsLetter from '../../components/NewsLetter';
import PopularWriter from '../../components/PopularWriter';
import ReviewSection from '../../components/ReviewSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Blogs />
      <PopularWriter />
      <ReviewSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
