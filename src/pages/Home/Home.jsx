import * as React from 'react';
import HeroSection from '../../components/HeroSection';
import Blogs from '../../components/Blogs';
import NewsLetter from '../../components/NewsLetter';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import PopularWriter from '../../components/PopularWriter';

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
