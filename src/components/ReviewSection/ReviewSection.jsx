import React from 'react';
import SectionTitle from '../SectionTitle';
import people1 from '../../assets/people1.jpg';
import people2 from '../../assets/people2.jpg';
import people3 from '../../assets/people3.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

const ReviewSection = () => {
  return (
    <div className="mx-2">
      <SectionTitle>Feedback from Our Audience</SectionTitle>
      {/* <div className="relative w-1/2 mx-auto">
        <div className="w-3/4 mx-auto relative">
          <div className="carousel relative">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="flex justify-between">
                <p>
                  I stumbled upon this blog website and was pleasantly surprised
                  by the quality of the content.
                </p>
                <img className="h-20 w-20" src={people1} alt="" />
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <p>
                <p>
                  What I appreciate most about this blog website is its
                  commitment to delivering value. The articles are not only
                  informative but also actionable, making it a go-to resource
                  for anyone looking to expand their knowledge or improve their
                  life.
                </p>
              </p>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-4/5">
                <p>
                  This blog website has a diverse range of writers who bring
                  unique perspectives to the table. The variety of voices and
                  viewpoints keeps the content fresh and engaging. It's a
                  platform that truly celebrates diversity of thought
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 w-full">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-10 md:gap-4 w-3/4   sm:w-1/2 md:w-[65%] lg:w-[55%] mx-auto">
            <p className="tracking-tight font-semibold text-stone-500">
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
            <p className="tracking-tight font-semibold text-stone-500">
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
            <p className="tracking-tight font-semibold text-stone-500">
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
