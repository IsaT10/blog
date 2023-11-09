import { useNavigate, useParams } from 'react-router-dom';
import useGetSingleData from '../../hooks/useGetSingleData';
import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAxios from '../../hooks/useAxios';

const UpdateBlog = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { blog } = useGetSingleData(id);
  const navigate = useNavigate();
  const {
    authorName,
    email,
    title,
    image,
    short_description,
    long_description,
    category,
  } = blog?.data || {};

  const date = new Date();
  // console.log(category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const short_description = e.target.short_description.value;
    const long_description = e.target.long_description.value;
    const category = e.target.category.value;
    const image = e.target.image.value;

    const data = {
      title,
      short_description,
      long_description,
      category,
      image,
      date,
    };

    // console.log(data);

    axios
      .put(`/blogs/${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success('update blog');
          navigate(-1);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-5 md:mt-10">
      <SectionTitle>Update BLOG</SectionTitle>
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
              name="title"
              defaultValue={title}
            />
          </div>
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Author name</label>

            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              type="text"
              disabled
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 ">
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Ctegory</label>
            <br />

            <select
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              defaultValue={category}
              name="category"
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
              defaultValue={image}
              name="image"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-stone-700 font-semibold">
            Short description
          </label>
          <input
            className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
            defaultValue={short_description}
            name="short_description"
            type="text"
          />
        </div>
        <div className="w-full ">
          <label className="text-stone-700 font-semibold">Blog Content</label>

          <textarea
            className="bg-white  border-[1px] border-stone-400 py-2 rounded-md px-3 mt-2 outline-none w-full pb-2 placeholder:pl-3 h-[300px]"
            defaultValue={long_description}
            name="long_description"
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

export default UpdateBlog;
