import React from 'react';
import {
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-3 mt-20 mb-8">
      <div className="flex justify-between items-center ">
        <div className="flex gap-6 text-stone-500 font-semibold ">
          <p className="hover:text-primary-color cursor-pointer duration-150">
            About
          </p>
          <p className="hover:text-primary-color cursor-pointer duration-150">
            Contact
          </p>
          <p className="hover:text-primary-color cursor-pointer duration-150">
            Blogs
          </p>
          <p className="hover:text-primary-color cursor-pointer duration-150">
            Becaome an author
          </p>
        </div>
        <div className="flex gap-3 text-primary-color text-3xl">
          <FaWhatsapp />
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>

      <h3 className="text-center text-2xl text-primary-color uppercase font-bold my-10">
        Blog Bloom
      </h3>
      <p className="text-center text-stone-600 text-sm">
        Copyright © by{' '}
        <span className="uppercase font-semibold text-primary-color">
          Ishat
        </span>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
