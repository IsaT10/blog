import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useGetData = () => {
  const axios = useAxios();

  const getBlogs = async () => {
    const res = await axios.get('/blogs');
    return res;
  };

  const { isLoading: blogsLoading, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });

  return {
    blogs,
    blogsLoading,
  };
};

export default useGetData;
