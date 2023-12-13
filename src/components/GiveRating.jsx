import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import useAxios from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';

const GiveRating = ({ blog, refetch }) => {
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { user } = useAuth();
  const axios = useAxios();

  const { rating: totalRating, _id, reviewedPeople } = blog || {};
  //   console.log(reviewedPeople || []);
  //   console.log(totalRating, starRating);
  //   console.log(blog);
  const handleRating = async () => {
    // console.log(starRating);
    const res = await axios.patch(`/blog?id=${_id}`, {
      rating: (totalRating || 0) + starRating,
      reviewedPeople: [...(reviewedPeople || []), user?.email],
    });

    if (res?.data?.modifiedCount) {
      refetch();
    }
  };
  return (
    <div className="flex gap-4 mt-3">
      <div className="flex">
        {[...Array(5)].map((star, i) => {
          const currentRating = i + 1;
          return (
            <div key={i}>
              <label>
                <input
                  className="hidden"
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => {
                    setStarRating(currentRating);
                  }}
                />
                <AiFillStar
                  className=""
                  size={35}
                  color={
                    currentRating <= (hover || starRating)
                      ? '#ffc107'
                      : '#e4e5e9'
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            </div>
          );
        })}
      </div>
      <button
        className="px-3 text-sm rounded-sm font-semibold bg-primary-color text-white"
        onClick={handleRating}
      >
        Sumbit
      </button>
    </div>
  );
};

export default GiveRating;
