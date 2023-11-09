import { useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import SectionTitle from '../../components/SectionTitle';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const AddBlog = () => {
  const [blogInfo, setBlogInfo] = useState({
    title: '',
    category: '',
    short_description: '',
    long_description: '',
    image: '',
  });

  const date = new Date();
  const axios = useAxios();

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      ...blogInfo,
      authorName: user?.displayName,
      date,
      email: user?.email,
      authorPhoto:
        user?.photoURL || 'https://i.ibb.co/2t81TDZ/ISS-18592-03637.webp',
      wishlist: false,
    };
    // console.log(blog);

    axios
      .post('/blogs', blog)
      .then(function (response) {
        // console.log(response.data);
        if (response.data.acknowledged) {
          toast.success('Add new blog');
          navigate('/');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="my-5 md:mt-10">
      <SectionTitle>WRITE A BLOG</SectionTitle>
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl xl:mx-auto mx-10 my-6 sm:my-12 flex flex-col sm:gap-20 gap-10"
      >
        <div className="flex sm:flex-row flex-col gap-10 ">
          <div className="sm:w-1/2 ">
            <label className="text-stone-700 font-semibold">Title</label>

            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              type="text"
              value={blogInfo.title}
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, title: e.target.value });
              }}
              //
            />
          </div>
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Author name</label>

            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              type="text"
              defaultValue={user?.displayName}
              disabled

              // value={blogInfo.brandName}
              // onChange={(e) => {
              //   setBlogInfo({ ...blogInfo, brandName: e.target.value });
              // }}
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 ">
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Ctegory</label>
            <br />

            <select
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              onBlur={(e) => {
                setBlogInfo({ ...blogInfo, category: e.target.value });
              }}
            >
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
          </div>
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Image URL</label>
            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3 mb-4"
              type="text"
              value={blogInfo.image}
              onChange={(e) => {
                setBlogInfo({
                  ...blogInfo,
                  image: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-stone-700 font-semibold">
            Short description
          </label>
          <input
            className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
            type="text"
            value={blogInfo.short_description}
            onChange={(e) => {
              setBlogInfo({
                ...blogInfo,
                short_description: e.target.value,
              });
            }}
          />
        </div>
        <div className="w-full ">
          <label className="text-stone-700 font-semibold">Blog Content</label>

          <textarea
            className="bg-white  border-[1px] border-stone-400 py-2 rounded-md px-3 mt-2 outline-none w-full pb-2 placeholder:pl-3 h-[300px]"
            value={blogInfo.long_description}
            onChange={(e) => {
              setBlogInfo({
                ...blogInfo,
                long_description: e.target.value,
              });
            }}
            type="text"
          />
        </div>

        {/* <Button>Add Product</Button> */}
        <button className="bg-primary-color w-[90px] text-white rounded-md font-semibold px-4 py-2 text-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
