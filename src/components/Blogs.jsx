import useGetData from '../hooks/useGetData';
import BlogCard from './BlogCard';
import Loader from './Loader';
import SectionTitle from './SectionTitle';

const Blogs = () => {
  const { blogs, blogsLoading } = useGetData();
  // console.log(blogs);
  // console.log(blogsLoading);

  const sortedData = blogs?.data?.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  // console.log(blogs);
  // console.log(blogsLoading);
  return (
    <div className="my-10 mx-2">
      <SectionTitle>Recent Blogs</SectionTitle>
      {blogsLoading ? (
        <div className="h-[60vh] flex flex-col items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-20 items-start">
          {sortedData?.slice(0, 6).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
