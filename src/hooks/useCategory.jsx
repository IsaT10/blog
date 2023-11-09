import { useQuery } from '@tanstack/react-query';

const useCategory = (category) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const data = await fetch(
        `https://blog-server-blush.vercel.app/api/blogs/category/${
          category || undefined
        }`
      );
      return await data.json();
    },
  });

  return { data, isLoading, refetch };
};

export default useCategory;
