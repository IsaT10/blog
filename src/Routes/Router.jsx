import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import AddBlog from '../pages/AddBlog/AddBlog';
import Wishlist from '../pages/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/addblog',
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: '/wishlist',
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
]);

export default router;
