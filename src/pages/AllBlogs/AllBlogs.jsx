import { useState } from 'react';
import BlogCard from '../../components/BlogCard';
import SectionTitle from '../../components/SectionTitle';
import useBlogs from '../../hooks/useBlogs';
import { FaSearch } from 'react-icons/fa';

const AllBlogs = () => {
  const { data, isLoading } = useBlogs();
  const [category, setCategory] = useState();
  console.log(category);

  return (
    <div className="my-5 md:mt-10 mx-3">
      <div className="flex justify-between items-center">
        <SectionTitle>All blogs</SectionTitle>
        <div className=" flex gap-4">
          <select
            className="h-[40px] w-[180px] px-3 border-2 border-stone-400 text-stone-500 rounded-md "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option
              value={''}
              className="text-lg text-primary-color font-semibold"
            >
              Filter by category
            </option>
            <option className="text-lg font-semibold" value="Food">
              Food
            </option>
            <option className="text-lg font-semibold" value="Travel">
              Travle
            </option>
            <option className="text-lg font-semibold" value="Health">
              Health
            </option>
            <option className="text-lg font-semibold" value="Technology">
              Technology
            </option>
            <option className="text-lg font-semibold" value="Garden">
              Garden
            </option>
            <option className="text-lg font-semibold" value="Science">
              Science
            </option>
          </select>
          <div className="relative">
            <input
              className="h-[40px]  border-2 border-stone-400 text-stone-900 pl-9 rounded-md placeholder:text-stone-400"
              type="text"
              placeholder="search"
            />
            <FaSearch className="absolute text-stone-400 top-3 left-3 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-10 xl:gap-20 items-start">
        {data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
