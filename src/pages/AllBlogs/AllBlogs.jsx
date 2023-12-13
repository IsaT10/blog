import { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard';
import SectionTitle from '../../components/SectionTitle';
import useGetData from '../../hooks/useGetData';
import { FaSearch } from 'react-icons/fa';
import useCategory from '../../hooks/useCategory';
import Loader from '../../components/Loader';

const AllBlogs = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [serachedItem, setSearchedItem] = useState([]);
  const { blogs, blogsLoading, blogsRefatch } = useGetData();

  const { data, refetch } = useCategory(category);

  useEffect(() => {
    blogsRefatch();
  }, [blogsRefatch, title]);

  useEffect(() => {
    setSearchedItem([]);
    refetch();
  }, [category, refetch]);

  const handleSearch = (word) => {
    const filteredPosts = blogs?.data?.filter((post) => {
      const postTitle = post.title.toLowerCase();
      const title = word.toLowerCase();

      return postTitle.includes(title);
    });

    setSearchedItem(filteredPosts);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(title);
    }
  };

  return (
    <div className="mt-5 mb-10 mx-3">
      <div className="flex md:flex-row flex-col mb-10 justify-between md:items-center">
        <SectionTitle>All blogs</SectionTitle>
        <div className=" flex sm:flex-row flex-col gap-4">
          <select
            className="h-[40px] w-[180px] px-3 border-2 border-stone-400 text-stone-500 rounded-md "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            // onBlur={handleBlur}
          >
            <option
              value={''}
              className="text-lg text-primary-color font-semibold"
            >
              All
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
            <option className="text-lg font-semibold" value="Home">
              Home
            </option>
            <option className="text-lg font-semibold" value="Science">
              Science
            </option>
          </select>
          <div className="flex items-center">
            <input
              className="h-[40px] border-r-0 border-2 border-stone-400 text-stone-900 pl-4 rounded-l-md placeholder:text-stone-400 outline-none"
              type="text"
              value={title}
              placeholder="search"
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={() => handleSearch(title)}
              className="bg-primary-color p-3 rounded-r-md"
            >
              <FaSearch className=" text-stone-100  " />
            </button>
          </div>
        </div>
      </div>

      {blogsLoading ? (
        <Loader className="h-[53vh]" />
      ) : (
        <>
          {serachedItem.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-10 xl:gap-20 items-start">
              {serachedItem?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          ) : (
            <>
              {data?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-10 xl:gap-20 items-start">
                  {data?.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              ) : (
                // <p className="h-[42vh] flex items-center justify-center text-2xl font-semibold text-red-500 -mt-6">
                //   Not available blog in this category
                // </p>'
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-10 xl:gap-20 items-start">
                  {blogs?.data?.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AllBlogs;
