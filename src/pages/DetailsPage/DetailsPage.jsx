import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import CommentList from '../../components/CommentList';
import useGetSingleData from '../../hooks/useGetSingleData';
import useAxios from '../../hooks/useAxios';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DetailsPage = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const { user } = useAuth();
  const { blog, blogLoading } = useGetSingleData(id);

  const axios = useAxios();
  console.log(id);
  console.log('blog', blog);

  const {
    _id,
    authorName,
    email,
    title,
    image,
    short_description,
    long_description,
    date,
  } = blog?.data || {};

  const getComments = async () => {
    const res = await axios.get(`/blog/comment/${id}`);
    return res;
  };

  const { data: comments, refetch: commentsRefatch } = useQuery({
    queryKey: ['comment'],
    queryFn: getComments,
  });

  const commentData = {
    blogId: _id,
    email: user?.email,
    userName: user?.displayName,
    authorImg: user?.photoURL,
    comment,
  };

  const handleComment = () => {
    if (comment.length === 0) return;
    axios
      .post('/blog/comment', commentData)
      .then((res) => {
        if (res.data.acknowledged) {
          setComment('');
          toast.success('comment add');
          commentsRefatch();
        }
      })
      .catch((err) => console.log(err));
  };

  const datee = new Date(date);
  const day = datee.getUTCDate();
  const month = datee.getUTCMonth() + 1;
  const year = datee.getUTCFullYear();

  const formattedDate = `${String(day).padStart(2, '0')}-${String(
    month
  ).padStart(2, '0')}-${year}`;

  return (
    <>
      <div className="my-8 mx-2">
        <div className="md:flex gap-8  min-h-[70vh]">
          <div className="flex-1">
            {blogLoading ? (
              <Skeleton className="w-full h-[70vh]" />
            ) : (
              <PhotoProvider>
                <PhotoView src={image}>
                  <img
                    className=" w-full h-[70vh] rounded-md object-cover"
                    src={image}
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            )}
          </div>
          <div className="flex-1">
            <div className="min-h-[80vh]">
              <div className="flex justify-between font-semibold text-primary-color mb-6">
                <p>
                  {blogLoading ? <Skeleton width={100} /> : authorName}
                  {/* {authorName} */}
                </p>
                <p>{blogLoading ? <Skeleton width={140} /> : formattedDate}</p>
              </div>
              <h3 className="text-2xl font-semibold text-stone-700 mb-9">
                {blogLoading ? <Skeleton width={600} height={35} /> : title}
              </h3>
              <p className="text-gray-500 text-md lg:text-lg !leading-8 block tracking-tight mb-4">
                {blogLoading ? (
                  <Skeleton width={600} height={25} count={4} />
                ) : (
                  short_description
                )}
              </p>
              <p className="text-gray-500 text-md lg:text-lg !leading-8 block tracking-tight">
                {blogLoading ? (
                  <Skeleton width={600} height={25} count={15} />
                ) : (
                  long_description
                )}
              </p>
              {email === user?.email ? (
                <Link to={`/blog/update/${_id}`}>
                  <button className="font-semibold bg-primary-color rounded-md py-1.5 border-2 border-primary-color px-4 text-white my-8">
                    Update Blog
                  </button>
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="mt-16 ">
          <div className="w-full lg:w-1/2">
            {email !== user?.email ? (
              <div className="flex gap-2 ">
                <input
                  className="rounded-sm border-2 border-stone-500 px-3 py-3 flex-1"
                  type="text"
                  value={comment}
                  placeholder="Share your thoughts"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  onClick={handleComment}
                  className="font-semibold bg-primary-color rounded-md py-1.5 border-2 border-primary-color px-4 text-white"
                >
                  Comment
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="w-full lg:w-1/2 ">
            {comments?.data?.length > 0 ? (
              <h5 className="text-2xl font-semibold mt-10 mb-6">Comments</h5>
            ) : (
              ''
            )}
            <div className="flex flex-col gap-10">
              {comments?.data?.map((comment, idx) => (
                <CommentList key={idx} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
