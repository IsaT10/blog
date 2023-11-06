import axios from 'axios';
import { toast } from 'react-toastify';

const usePostData = (url, data, toastMsg) => {
  axios
    .post(url, data)
    .then((res) => {
      if (res.data.acknowledged) {
        toast.success(toastMsg);
      }
    })
    .catch((err) => console.log(err));
};

export default usePostData;
