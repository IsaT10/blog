import { Link } from 'react-router-dom';
import { useWishlist } from '../../Context/WishListContext';
import WishlistItem from '../../components/WishlistItem';

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useWishlist();
  console.log(wishlistItems);
  return (
    <div className="my-7 mx-2 min-h-[68vh]">
      {wishlistItems?.length > 0 ? (
        <div className="grid grid-cols-12 gap-16">
          {wishlistItems.map((item, idx) => (
            <WishlistItem key={idx} item={item} />
          ))}
        </div>
      ) : (
        <div className="h-[60vh] flex flex-col items-center justify-center gap-8">
          <h4 className="text-3xl font-semibold text-primary-color ">
            Your wishlist is currently empty.
          </h4>
          <Link
            to="/"
            className=" underline text-primary-color text-lg font-semibold"
          >
            Return Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
