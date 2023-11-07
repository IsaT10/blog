import DataTable from 'react-data-table-component';
import useGetData from '../../hooks/useGetData';

const FeaturedBlog = () => {
  const { blogs, blogsLoading } = useGetData();
  console.log(blogs);

  const columns = [
    { name: 'Title', selector: (row) => row.title },
    { name: 'Author Name', selector: (row) => row.authorName },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={blogs}
        progressPending={blogsLoading}
      />
    </div>
  );
};

export default FeaturedBlog;
