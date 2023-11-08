import React from 'react';
import writer1 from '../assets/writer1.jpg';
import writer2 from '../assets/writer2.jpg';
import writer3 from '../assets/writer3.jpg';
import SectionTitle from './SectionTitle';

const PopularWriter = () => {
  return (
    <div className="mt-10 mx-2">
      <SectionTitle>Popular wreiter</SectionTitle>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="mx-auto">
          <img
            className="w-[300px] h-[300px] object-cover rounded-sm"
            src={writer1}
            alt=""
          />
          <p className="text-lg font-semibold text-center mt-4">John Smith</p>
        </div>
        <div className="  mx-auto">
          <img
            className="w-[300px] h-[300px] object-cover rounded-sm"
            src={writer2}
            alt=""
          />
          <p className="text-lg font-semibold text-center mt-4">James Davis</p>
        </div>
        <div className=" mx-auto">
          <img
            className="w-[300px] h-[300px] object-cover rounded-sm"
            src={writer3}
            alt=""
          />
          <p className="text-lg font-semibold text-center mt-4">
            William Martin
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularWriter;
