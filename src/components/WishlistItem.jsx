import axios from 'axios';
import { MdCancel } from 'react-icons/md';

const WishlistItem = ({
  item: {
    _id,
    title,
    image,
    short_description,
    category,
    long_description,
    date,
  },
}) => {
  const handleDelete = () => {
    axios.delete();
  };
  return (
    <div className="col-span-6 flex relative">
      <img className="h-[200px] w-[200px] rounded-l-md" src={image} alt="" />
      <div className="flex-col flex items-start justify-between py-4 px-4 border-2 border-stone-300 rounded-r-md border-l-0">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="font-semibold text-stone-400">
          {short_description.slice(0, 70)}...
        </p>
        <div className="flex justify-between gap-4 items-center w-full">
          <button className="bg-primary-color text-white font-semibold px-4 py-2 rounded-md ">
            Details
          </button>
          <div>
            <p className="flex items-center bg-secondary-color text-xs px-2 py-0.5  uppercase font-bold text-stone-100 bg-primary-color rounded-full">
              {category}
            </p>
          </div>
        </div>
      </div>
      <MdCancel
        onClick={handleDelete}
        className="text-2xl absolute text-[#FF0000] -right-2 cursor-pointer -top-2"
      />
    </div>
  );
};

export default WishlistItem;
