import HeroSection from '../../components/HeroSection';
import { motion, useScroll } from 'framer-motion';
import Blogs from '../../components/Blogs';
import NewsLetter from '../../components/NewsLetter';
import PopularWriter from '../../components/PopularWriter';
import ReviewSection from '../../components/ReviewSection';
import './Home.css';

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        // initial={{ x: -100 }}
        // animate={{ x: 0 }}
        // transition={{
        //   ease: 'linear',
        //   x: { duration: 2 },
        // }}
        initial={{ opacity: 0.9, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <HeroSection />
      </motion.div>
      <Blogs />
      <PopularWriter />
      <NewsLetter />
      <ReviewSection />
    </motion.div>
  );
};

export default Home;
