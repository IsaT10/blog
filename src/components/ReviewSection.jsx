import SectionTitle from './SectionTitle';
import people1 from '../assets/people1.jpg';
import people2 from '../assets/people2.jpg';
import people3 from '../assets/people3.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const ReviewSection = () => {
  return (
    <div className="mx-2  ">
      <SectionTitle>Feedback from Our Audience</SectionTitle>

      <div className="carousel w-full mt-10 lg:mt-14 mb-12 lg:mb-20">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-10 md:gap-4 w-3/4   sm:w-1/2 md:w-[65%] lg:w-[55%] mx-auto">
            <p className="tracking-tight lg:text-lg font-semibold text-stone-500">
              What I appreciate most about this business blog is its commitment
              to staying up-to-date with the latest trends and innovations. It's
              like having a trusted advisor to navigate the ever-changing
              business landscape.
            </p>

            <div>
              <figure className="h-24 w-24">
                <img
                  className=" object-cover rounded-md h-full w-full"
                  src={people1}
                  alt=""
                />
              </figure>
              <p className="text-primary-color font-semibold text-center mt-1">
                Milton
              </p>
              <p className="text-stone-500 font-semibold text-sm text-center">
                Business man
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform md:-translate-y-1/2  -translate-y-full sm:-translate-y-[90%] sm:left-5 sm:right-5 top-1/2 w-full sm:w-3/4 md:w-[85%] lg:w-[70%] mx-auto">
            <a
              href="#slide4"
              className="bg-primary-color p-3 sm:p-4 text-white rounded-md sm:text-2xl"
            >
              <AiOutlineArrowLeft />
            </a>
            <a
              href="#slide2"
              className="bg-primary-color  p-3 sm:p-4 text-white rounded-md sm:text-2xl"
            >
              <AiOutlineArrowRight className="" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-10 md:gap-4 w-3/4   sm:w-1/2 md:w-[65%] lg:w-[55%] mx-auto">
            <p className="tracking-tight lg:text-lg font-semibold text-stone-500">
              I stumbled upon this blog website and was pleasantly surprised by
              the quality of the content. It covers a wide range of topics and
              provides insightful, well-researched articles. I find myself
              coming back for new reads regularly.
            </p>

            <div>
              <figure className="h-24 w-24">
                <img
                  className=" object-cover rounded-md h-full w-full"
                  src={people2}
                  alt=""
                />
              </figure>
              <p className="text-primary-color font-semibold text-center mt-1">
                Jahin
              </p>
              <p className="text-stone-500 font-semibold text-sm text-center">
                Student
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform md:-translate-y-1/2  -translate-y-full sm:-translate-y-[90%] sm:left-5 sm:right-5 top-1/2 w-full sm:w-3/4 md:w-[85%] lg:w-[70%] mx-auto">
            <a
              href="#slide2"
              className="bg-primary-color p-3 sm:p-4 text-white rounded-md sm:text-2xl"
            >
              <AiOutlineArrowLeft />
            </a>
            <a
              href="#slide3"
              className="bg-primary-color  p-3 sm:p-4 text-white rounded-md sm:text-2xl"
            >
              <AiOutlineArrowRight className="" />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-10 md:gap-4 w-3/4   sm:w-1/2 md:w-[65%] lg:w-[55%] mx-auto">
            <p className="tracking-tight lg:text-lg font-semibold text-stone-500">
              I can't thank this travel blog enough for being my go-to resource
              when planning my trips. The detailed travel guides, stunning
              photographs, and personal anecdotes make me feel like I'm right
              there experiencing the destinations. Truly inspiring!
            </p>

            <div>
              <figure className="h-24 w-24">
                <img
                  className=" object-cover rounded-md h-full w-full"
                  src={people3}
                  alt=""
                />
              </figure>
              <p className="text-primary-color font-semibold text-center mt-1">
                Rudiger
              </p>
              <p className="text-stone-500 font-semibold text-sm text-center">
                Travelar
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform md:-translate-y-1/2  -translate-y-full sm:-translate-y-[90%] sm:left-5 sm:right-5 top-1/2 w-full sm:w-3/4 md:w-[85%] lg:w-[70%] mx-auto">
            <a
              href="#slide3"
              className="bg-primary-color p-3 sm:p-4 text-white rounded-md sm:text-2xl"
            >
              <AiOutlineArrowLeft />
            </a>
            <a
              href="#slide1"
              className="bg-primary-color  p-3 sm:p-4 text-white rounded-md sm:text-2xl"
            >
              <AiOutlineArrowRight className="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
