import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-2  mb-14 border-t-2 pt-16 border-primary-color ">
      <div className="flex md:flex-row flex-col gap-6 justify-between items-center ">
        <div className="flex gap-6 text-stone-500 font-semibold text-sm  md:text-base">
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
        <div className="flex gap-6 md:gap-3 text-primary-color text-3xl">
          <IoLogoWhatsapp />
          <AiFillInstagram />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>

      <h3 className="text-center text-2xl text-primary-color uppercase font-bold my-10">
        Blog Bloom
      </h3>
      <p className="text-center text-stone-600 text-sm">
        Copyright © by{' '}
        <span className=" font-semibold text-primary-color">Rakib Uddin</span>.
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
