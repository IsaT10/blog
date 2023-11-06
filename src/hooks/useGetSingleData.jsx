import { useQuery } from '@tanstack/react-query';

const useGetSingleData = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ['blogDetails'],
    queryFn: async () => {
      const blog = await fetch(`http://localhost:5000/api/blogs/${id}`);
      return blog.json();
    },
  });

  return { data, isLoading };
};

export default useGetSingleData;
