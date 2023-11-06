import { createContext, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const WishListContext = createContext();
const WishListProvider = () => {
  //   const [wishlistItems, setWishlistItems] = useState([]);
  const { user } = useAuth();

  //   const { data, isLoading } = useQuery({
  //     queryKey: ['wishlist'],
  //     queryFn: async () => {
  //       const wishlistBlogs = await fetch(
  //         'http://localhost:5000/api/blog/wisjlist'
  //       );
  //       return await wishlistBlogs.json();
  //     },

  //   });

  const addToWishlist = (blog) => {
    axios
      .post('http://localhost:5000/api/blog/wisjlist', blog)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <WishListContext.Provider value={{}}></WishListContext.Provider>;
};

export default WishListProvider;
