import useBlogs from '../hooks/useBlogs';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';

const Blogs = () => {
  const { data, isLoading } = useBlogs();

  console.log(data);
  console.log(isLoading);
  return (
    <div className="my-10 mx-2">
      <SectionTitle>Recent Blogs</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-20 items-start">
        {data?.slice(0, 6).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
