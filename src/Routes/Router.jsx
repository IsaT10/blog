import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import AddBlog from '../pages/AddBlog/AddBlog';
import Wishlist from '../pages/Wishlist/Wishlist';
import AllBlogs from '../pages/AllBlogs/AllBlogs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import UpdateBlog from '../pages/UpdateBlog/UpdateBlog';
import FeaturedBlog from '../pages/FeaturedBlog/FeaturedBlog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'addblog',
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: 'wishlist',
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      { path: 'featuredblogs', element: <FeaturedBlog /> },
      {
        path: 'blog/:blogName/:id',
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'blog/update/:id',
        element: (
          <PrivateRoute>
            <UpdateBlog />
          </PrivateRoute>
        ),
      },
      { path: 'allblogs', element: <AllBlogs /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
]);

export default router;
