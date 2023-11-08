import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
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
