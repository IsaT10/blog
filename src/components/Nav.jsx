import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { CartContext } from '../context/CartContext';
import avatar from '../assets/user8.png';
import useAuth from '../hooks/useAuth';

const Nav = () => {
  const { logOut, user } = useAuth();

  // const { cartItems } = useContext(CartContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Successfully logged out');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-2 lg:px-0 py-2 md:py-6">
      <div className="navbar  max-w-7xl mx-auto flex justify-between">
        <div className=" flex w-full md:w-10 justify-between items-center">
          <div className="flex  gap-2 md:gap-2 lg:gap-5 items-center">
            <Link to="/">
              <h1 className="text-lg md:text-xl lg:text-2xl text-primary-color font-bold ">
                BlogBloom
              </h1>
            </Link>
          </div>

          <div className="dropdown ">
            <label tabIndex={0} className="btn  btn-ghost md:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content -left-20 mt-3 p-2 shadow  w-36 mr-10 z-40 text-white rounded-md  bg-primary-color"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addblog">Add Blog</Link>
              </li>
              <li>
                <Link to="/featuredblogs">Featured Blogs</Link>
              </li>
              <li>
                <Link to="/allblogs">All Blogs</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>

              {user?.email ? (
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/login">login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex ">
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'border-l-8 border-primary-color  pl-1  font-semibold'
                    : 'font-semibold  hover:text-primary-color duration-100  '
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/addblog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'border-l-8 border-primary-color   pl-1  font-semibold'
                    : 'font-semibold hover:text-primary-color duration-100 '
                }
              >
                Add Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/featuredblogs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'border-l-8 border-primary-color   pl-1  font-semibold'
                    : 'font-semibold hover:text-primary-color duration-100 '
                }
              >
                Featured Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allblogs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'border-l-8 border-primary-color   pl-1  font-semibold'
                    : 'font-semibold hover:text-primary-color duration-100 '
                }
              >
                All Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'border-l-8 border-primary-color  pl-1  font-semibold'
                    : 'font-semibold  hover:text-primary-color duration-100 '
                }
              >
                Wishlist
              </NavLink>
            </li>

            {user?.email ? (
              <>
                <button
                  className="bg-transparent border-2 text-sm md:text-base border-stone-900  rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5.5 text-stone font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>

                {user?.photoURL ? (
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="w-10 rounded-full bg-transparent">
                    <img src={avatar} alt="asdsa" />
                  </div>
                )}
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'pending'
                        : isActive
                        ? ' border-l-8 border-primary-color  pl-1  font-semibold'
                        : 'font-semibold  hover:text-primary-color duration-100 '
                    }
                  >
                    Sign up
                  </NavLink>
                </li>
                <Link
                  to="/login"
                  className="bg-transparent border-2 text-sm md:text-base border-stone-900 rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5.5  font-semibold"
                >
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
