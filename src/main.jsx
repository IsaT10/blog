import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WishListProvider from './Context/WishListContext.jsx';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './i18n/i18n';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme highlightColor="#b4f7f4">
        <AuthProvider>
          <WishListProvider>
            <ToastContainer
              position="top-right"
              autoClose={400}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              transition={Slide}
              pauseOnHover={false}
              theme="dark"
            />
            <RouterProvider router={router} />
          </WishListProvider>
        </AuthProvider>
      </SkeletonTheme>
    </QueryClientProvider>
  </React.StrictMode>
);
