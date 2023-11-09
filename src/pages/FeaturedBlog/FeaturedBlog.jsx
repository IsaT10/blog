import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import useGetData from '../../hooks/useGetData';
import Loader from '../../components/Loader';

const FeaturedBlog = () => {
  const { blogs, blogsLoading } = useGetData();
  // console.log(blogs?.data);

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const sortedData = blogs?.data?.sort((a, b) => {
    const wordLengthA = countWords(a.long_description);
    const wordLengthB = countWords(b.long_description);

    if (wordLengthA > wordLengthB) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  const top10Data = sortedData?.slice(0, 10);

  const columns = [
    {
      name: '',
      selector: (row, i) => i + 1,
      style: {
        fontWeight: '600',
        fontSize: '20px',
      },
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      style: {
        fontSize: '18px',
        fontWeight: '600',
        marginLeft: '-200px',
      },
    },
    {
      name: 'Author Name',
      selector: (row) => row.authorName,
      style: {
        fontSize: '18px',
        marginLeft: '80px',
      },
    },
    {
      name: 'Author Image',
      selector: (row) => (
        <img
          className="h-20 w-20 md:h-24 md:w-24 object-cover "
          src={row.authorPhoto}
          alt=""
        />
      ),
      style: {
        fontSize: '18px',
      },
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        color: 'black',
        fontSize: '18px',
        fontWeight: '600',
        paddingLeft: '0 8px',
        background: '#E5E5E5',
        marginLeft: '-30px',
      },
    },
  };

  createTheme(
    'solarized',
    {
      text: {
        primary: 'black',
        secondary: '#2aa198',
      },
      background: {
        default: '',
      },
      divider: {
        default: '#999',
      },
    },
    'dark'
  );

  return (
    <div className="lg:w-full overflow-x-auto w-[97%] mx-2 my-10 ">
      {blogsLoading ? (
        <Loader className="h-[73vh]" />
      ) : (
        <div className="border-2 border-stone-300">
          <DataTable
            responsive
            columns={columns}
            data={top10Data}
            customStyles={customStyles}
            theme="solarized"
          />
        </div>
      )}
    </div>
  );
};

export default FeaturedBlog;
