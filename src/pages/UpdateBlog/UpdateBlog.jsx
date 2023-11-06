import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
  const { id } = useParams();
  console.log(id);
  return <div>update</div>;
};

export default UpdateBlog;
