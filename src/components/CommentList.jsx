import useAuth from '../hooks/useAuth';
import avatar from '../assets/user8.png';

const CommentList = ({ comment }) => {
  const { _id, blogId, email, userName, authorImg, comment: text } = comment;
  const { user } = useAuth();
  return (
    <div className=" grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight">
      <figure className="row-span-2 h-12 w-12">
        {authorImg ? (
          <img
            className="rounded-md"
            src={comment.authorImg}
            alt="comment author"
          />
        ) : (
          <img className="rounded-md" src={avatar} alt="comment author" />
        )}
      </figure>
      <h4 className="text-xl font-semibold text-stone-700 leading-6">
        {userName}
      </h4>
      <p className="font-semibold text-lg text-stone-500 ">
        f.dev has a lot of awesome and informative blogs. When I get free time I
        always visit this website for learning.
      </p>
    </div>
  );
};

export default CommentList;
