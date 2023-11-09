import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WishlistSkeletonCard = ({ wishlistItems }) => {
  return Array(wishlistItems?.length)
    .fill(0)
    .map((_, i) => (
      <>
        <div className="col-span-12 md:col-span-6 flex relative" key={i}>
          <div
            className=" w-[160px] md:w-[150px]
      h-40  lg:w-[200px] rounded-l-md object-cover"
          >
            <Skeleton className="h-[180px]" />
          </div>
          <div className="flex-col flex-1 flex items-start justify-between p-2 pb-5 lg:px-4  rounded-r-md border-l-0">
            <div className="text-lg lg:text-xl  font-semibold w-full">
              <Skeleton height={35} />
            </div>
            <div className="w-full">
              <Skeleton count={2} />
            </div>
            <div className="flex justify-between gap-4 items-center w-full">
              <div className="text-white font-semibold  rounded-md w-[100px] ">
                <Skeleton height={40} />
              </div>
              <div>
                <Skeleton width={60} height={20} />
              </div>
            </div>
          </div>
          <div className="text-3xl absolute text-primary-color -right-3 cursor-pointer -top-3">
            <Skeleton />
          </div>
        </div>
      </>
    ));
};

export default WishlistSkeletonCard;
