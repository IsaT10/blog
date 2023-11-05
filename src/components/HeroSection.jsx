import hero2 from '../assets/hero2.jpg';

const HeroSection = () => {
  return (
    <div className="md:flex  justify-between items-center mt-5 mx-2">
      <div className="flex-1 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-color">
          READ NEXT <br /> LEVEL BLOGS HERE
        </h1>
        <p className="mt-6 text-lg text-stone-500">
          Discover your desired knowledge from a collection of over{' '}
          <span className="text-primary-color text-lg font-semibold">
            1500+
          </span>{' '}
          blogs authored by some of the world's top writers.
        </p>
        <button className="bg-primary-color text-white font-semibold px-4 md:px-5 py-1.5 md:py-2 text-base md:text-lg mt-6 rounded-md">
          Start reading
        </button>
      </div>
      <div className="flex-1 mt-4 md:mt-0 ">
        <img className="rounded-md" src={hero2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
