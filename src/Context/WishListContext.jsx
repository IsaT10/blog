import { createContext, useContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useAxios from '../hooks/useAxios';

const WishListContext = createContext();

export const useWishlist = () => {
  return useContext(WishListContext);
};

const WishListProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { user } = useAuth();
  const axios = useAxios();

  console.log(user?.email);

  const getWishlist = async () => {
    const res = await axios.get(`/blog/wishlist?email=${user.email}`);
    return res;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['wishlist', user?.email],
    queryFn: getWishlist,
  });

  useEffect(() => {
    if (data?.data) {
      setWishlistItems(data?.data);
      refetch();
    }
  }, [data?.data, refetch, user]);

  const addToWishlist = (blog) => {
    axios
      .post('/blog/wishlist', blog)
      .then((res) => {
        console.log(res.data);
        if (res?.data?.acknowledged) {
          console.log(wishlistItems);
          setWishlistItems([
            ...wishlistItems,
            { _id: res.data.insertedId, ...blog },
          ]);
          toast.success(`${blog.title} has been added to your wishlist`, {
            autoClose: 1000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <WishListContext.Provider
      value={{
        addToWishlist,
        data,
        isLoading,
        wishlistItems,
        setWishlistItems,
        refetch,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
