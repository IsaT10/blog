import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../Context/WishListContext';
import useAuth from '../hooks/useAuth';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useGetData from '../hooks/useGetData';

const BlogCard = ({
  blog: {
    _id,
    title,
    image,
    short_description,
    category,
    long_description,
    date,
  },
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToWishlist, setWishlistItems } = useWishlist();

  const linkTitle = title.toLowerCase().replace(/ /g, '-');

  const handleAddToWishlist = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const data = {
      blogId: _id,
      title,
      image,
      short_description,
      category,
      long_description,
      date,
      email: user?.email,
    };

    addToWishlist(data);
  };

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className="container">
        <div className=" mx-auto sm:w-full   rounded-md ">
          <div className="flex flex-col ">
            <img
              src={image}
              alt=""
              className=" w-full h-[300px] object-cover  rounded-md"
            />

            <div className="flex-auto py-4 justify-evenly">
              <div className="flex justify-between items-center">
                <p className="flex items-center bg-secondary-color text-xs px-2 py-0.5  uppercase font-bold text-stone-100 bg-primary-color rounded-full">
                  {category}
                </p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <h2 className="text-xl mr-auto font-semibold">{title}</h2>
                  <p className="text-gray-400 my-4 font-semibold">
                    {short_description.slice(0, 70)}...
                  </p>
                  <Link to={`/blog/${linkTitle}/${_id}`}>
                    <button className="bg-primary-color text-white font-semibold px-4 py-2 rounded-md ">
                      Details
                    </button>
                  </Link>
                </div>
                <div className="flex  space-x-2 text-sm font-medium items-center justify-between">
                  <div className="flex items-center flex-col  gap-2">
                    <div className="tooltip tooltip-left" data-tip="Wishlist">
                      <AiOutlineHeart
                        onClick={handleAddToWishlist}
                        //   onClick={handleAddToCart}
                        className="text-2xl text-secondary-color duration-200 cursor-pointer "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
