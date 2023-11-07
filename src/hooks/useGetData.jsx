import { useQuery } from '@tanstack/react-query';

const useGetData = () => {
  const { isLoading: blogsLoading, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const data = await fetch('http://localhost:5000/api/blogs');
      return await data.json();
    },
  });

  return {
    blogs,
    blogsLoading,
  };
};

export default useGetData;
