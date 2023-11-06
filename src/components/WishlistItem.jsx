import axios from 'axios';
import { MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';

const WishlistItem = ({
  item: {
    _id,
    title,
    image,
    short_description,
    category,
    long_description,
    date,
  },
  refetch,
}) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: true,
  });
  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',

        background: '#4C5255',
        color: '#fff',
      })
      .then((result) => {
        if (result.isConfirmed) {
          const deleteItem = async () => {
            axios
              .delete(`http://localhost:5000/api/blog/wishlists/${_id}`)
              .then((res) => {
                if (res?.data?.deletedCount > 0) {
                  refetch();
                }
              });
          };
          deleteItem();
          swalWithBootstrapButtons.fire({
            title: 'Deleted',
            text: 'Your file has been deleted.',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK',
            reverseButtons: false,
            background: '#4C5255',
            color: '#FFF',
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your file is safe :)',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#4C5255',
            color: '#fff',
          });
        }
      });
  };
  return (
    <div className="col-span-12 md:col-span-6 flex relative">
      <img
        className="lg:h-[200px] w-[160px] md:w-[150px] h-[180px] lg:w-[200px] rounded-l-md object-cover"
        src={image}
        alt=""
      />
      <div className="flex-col flex-1 flex items-start justify-between p-2 lg:p-4  border-2 border-stone-300 rounded-r-md border-l-0">
        <h2 className="text-lg lg:text-xl xl:text-2xl font-semibold">
          {title}
        </h2>
        <p className="font-semibold text-sm lg:text-base text-stone-400">
          {short_description.slice(0, 70)}...
        </p>
        <div className="flex justify-between gap-4 items-center w-full">
          <button className="bg-primary-color text-white font-semibold px-3 py-1.5 lg:px-4 lg:py-2 rounded-md ">
            Details
          </button>
          <div>
            <p className="flex items-center bg-secondary-color text-xs px-2 py-0.5  uppercase font-bold text-stone-100 bg-primary-color rounded-full">
              {category}
            </p>
          </div>
        </div>
      </div>
      <MdCancel
        onClick={handleDelete}
        className="text-3xl absolute text-primary-color -right-3 cursor-pointer -top-3"
      />
    </div>
  );
};

export default WishlistItem;
