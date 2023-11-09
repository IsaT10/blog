const Loader = ({ className }) => {
  return (
    <div
      className={`${className} flex justify-center text-primary-color items-center`}
    >
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loader;
