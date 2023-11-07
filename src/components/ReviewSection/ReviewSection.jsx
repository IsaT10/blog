import React from 'react';
import SectionTitle from '../SectionTitle';
import people1 from '../../assets/people1.jpg';
import people2 from '../../assets/people2.jpg';
import people3 from '../../assets/people3.jpg';

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
          <div className="w-2/3  sm:w-1/2 md:w-[40%] lg:w-2/6 mx-auto">
            <p className="">
              I stumbled upon this blog website and was pleasantly surprised by
              the quality of the content.
            </p>
          </div>
          <div className="absolute flex justify-between transform md:-translate-y-1/2  -translate-y-full sm:-translate-y-[90%] sm:left-5 sm:right-5 top-1/2 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 mx-auto">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-2/6 mx-auto">
            <p>
              What I appreciate most about this blog website is its commitment
              to delivering value.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 w-1/2 mx-auto">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-2/6 mx-auto">
            <p>
              This blog website has a diverse range of writers who bring unique
              perspectives to the table.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 w-1/2 mx-auto">
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
  );
};

export default ReviewSection;
