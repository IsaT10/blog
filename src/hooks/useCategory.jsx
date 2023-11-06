import { useQuery, useQueryClient } from '@tanstack/react-query';

const useCategory = (category) => {
  const queryClient = useQueryClient(); // Get the queryClient

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/api/blogs/category/${category || undefined}`
      );
      return await data.json();
    },
  });

  const clearData = () => {
    queryClient.setQueryData(['category'], null);
  };

  return { data, isLoading, refetch, clearData };
};

export default useCategory;
