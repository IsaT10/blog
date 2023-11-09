import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useGetSingleData = (id) => {
  const axios = useAxios();

  const getBlogDetails = async () => {
    const res = await axios.get(`/blogs/${id}`);
    return res;
  };

  const { data: blog, isLoading: blogLoading } = useQuery({
    queryKey: ['blogDetails'],
    queryFn: getBlogDetails,
  });

  return { blog, blogLoading };
};

export default useGetSingleData;
