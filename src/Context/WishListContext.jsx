import { createContext, useContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const WishListContext = createContext();

export const useWishlist = () => {
  return useContext(WishListContext);
};

const WishListProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { user } = useAuth();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['wishlist'],
    queryFn: async () => {
      const wishlistBlogs = await fetch(
        `http://localhost:5000/api/blog/wishlist?email=${user?.email}`
      );
      return await wishlistBlogs.json();
    },
  });

  useEffect(() => {
    if (data) {
      setWishlistItems(data);
      refetch();
    }
  }, [data, user, refetch]);

  const addToWishlist = (blog) => {
    axios
      .post('http://localhost:5000/api/blog/wishlist', blog)
      .then((res) => {
        if (res?.data?.acknowledged) {
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
