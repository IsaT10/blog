import { Link } from 'react-router-dom';
import { useWishlist } from '../../Context/WishListContext';
import WishlistItem from '../../components/WishlistItem';
import Loader from '../../components/Loader';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import WishlistSkeletonCard from './WishlistSkeletonCard';

const Wishlist = () => {
  const { wishlistItems, isLoading, refetch } = useWishlist();
  console.log(isLoading);
  return (
    <div className="mb-7 mt-10 mx-2 min-h-[78vh]">
      {isLoading ? (
        // <div className="grid grid-cols-12 gap-6 gap-y-10 xl:gap-16">
        //   <WishlistSkeletonCard wishlistItems={wishlistItems} />
        // </div>
        <Loader className="h-[70vh]" />
      ) : (
        <>
          {wishlistItems?.length > 0 ? (
            <div className="grid grid-cols-12 gap-6 gap-y-10 xl:gap-16">
              {wishlistItems?.map((item, idx) => (
                <WishlistItem
                  key={idx}
                  item={item}
                  refetch={refetch}
                  isLoading={isLoading}
                />
              ))}
            </div>
          ) : (
            <div className="h-[60vh] flex flex-col items-center justify-center gap-8">
              <h4 className="text-3xl font-semibold text-stone-600-color ">
                Your wishlist is currently empty.
              </h4>
              <Link
                to="/"
                className=" underline text-stone-600-color text-lg font-semibold"
              >
                Return Home
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
