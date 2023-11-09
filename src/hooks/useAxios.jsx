import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://blog-server-blush.vercel.app/api',
  // withCredentials: true,
});
const useAxios = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log('from axios', error);
    }
  );
  return instance;
};

export default useAxios;
