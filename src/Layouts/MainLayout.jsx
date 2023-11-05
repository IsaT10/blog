import React from 'react';
import { Outlet } from 'react-router-dom';
// import ResponsiveAppBar from '../components/Nav';
import Nav from '../components/Nav';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
