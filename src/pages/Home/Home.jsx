import * as React from 'react';
import HeroSection from '../../components/HeroSection';
import Blogs from '../../components/Blogs';
import NewsLetter from '../../components/NewsLetter';
import ReviewSection from '../../components/ReviewSection/ReviewSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Blogs />
      <NewsLetter />
      <ReviewSection />
    </div>
  );
};

export default Home;
