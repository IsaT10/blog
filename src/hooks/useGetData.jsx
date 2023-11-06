import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useGetData = () => {
  const { isLoading: blogsLoading, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const data = await fetch('http://localhost:5000/api/blogs');
      const blogs = await data.json();
      const sortedData = blogs.sort((a, b) => {
        // const dateA = new Date(a.date);
        // const dateB = new Date(b.date);
        if (a.date > b.date) {
          return -1;
        } else if (a < b) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedData;
    },
  });

  return {
    blogs,
    blogsLoading,
  };
};

export default useGetData;
