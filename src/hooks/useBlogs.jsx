import { useQuery } from '@tanstack/react-query';

const useBlogs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const data = await fetch('http://localhost:5000/api/blogs');
      return await data.json();
    },
  });

  return { isLoading, data, error };
};

export default useBlogs;
