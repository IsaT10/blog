import { useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const AddBlog = () => {
  const [blogInfo, setBlogInfo] = useState({
    title: '',
    brandName: '',
    category: '',
    price: '',
    short_description: '',
    long_description: '',
    image: '',
  });

  const { user } = useAuth();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { ...blogInfo, authorName: user?.displayName };
    console.log(blog);

    // const createBlog = async (data) => {
    //   try {
    //     const res = await fetch(
    //       'https://digital-nexus-server.vercel.app/products',
    //       {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data),
    //       }
    //     );
    //     const result = await res.json();
    //     if (result.acknowledged) {
    //       toast.success('Add product successfully');
    //       setBlogInfo({
    //         ...blogInfo,
    //         title: '',
    //         brandName: '',
    //         category: '',
    //         price: '',
    //         short_description: '',
    //         long_description: '',
    //         image: '',
    //       });
    //       // navigate(`/products/${productInfo.brandName}`);
    //       // navigate('/');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    // createBlog(blog);
  };

  return (
    <div className="my-5 md:mt-10">
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
            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              type="text"
              value={blogInfo.category}
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, category: e.target.value });
              }}
            />
          </div>
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Price</label>

            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3"
              value={blogInfo.price}
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, price: e.target.value });
              }}
              type="text"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 ">
          <div className="sm:w-1/2">
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
          <div className="sm:w-1/2">
            <label className="text-stone-700 font-semibold">Blog Content</label>

            <input
              className="bg-white  border-b-[1px] border-stone-400  outline-none w-full pb-2 placeholder:pl-3 "
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
        </div>
        <div className="w-full">
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
        {/* <Button>Add Product</Button> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
