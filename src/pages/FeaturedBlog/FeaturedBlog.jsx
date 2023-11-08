import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import useGetData from '../../hooks/useGetData';

const FeaturedBlog = () => {
  const { blogs, blogsLoading } = useGetData();
  console.log(blogs?.data);

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

        // justifyContent: 'center',
      },
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      style: {
        fontSize: '18px',
        fontWeight: '600',

        // justifyContent: 'center',
        marginLeft: '-200px',
      },
    },
    {
      name: 'Author Name',
      selector: (row) => row.authorName,
      style: {
        fontSize: '18px',
        // justifyContent: 'center',
        zIndex: -10,
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
        // justifyContent: 'center',
      },
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        // maxWidth: '700px',
      },
    },
    headCells: {
      style: {
        color: 'black',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingLeft: '0 8px',
        // justifyContent: 'center',
        background: '#E5E5E5',
        marginLeft: '-60px',
      },
    },
    // cells: {
    //   style: {
    //     paddingLeft: '8px', // override the cell padding for data cells
    //     paddingRight: '8px',
    //   },
    // },
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
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#999',
      },
    },
    'dark'
  );

  return (
    <div className="lg:w-full overflow-x-auto w-[97%]">
      {blogsLoading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          responsive
          columns={columns}
          data={top10Data}
          customStyles={customStyles}
          theme="solarized"
        />
      )}
    </div>
  );
};

export default FeaturedBlog;
