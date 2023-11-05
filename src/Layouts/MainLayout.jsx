import React from 'react';
import { Outlet } from 'react-router-dom';
// import ResponsiveAppBar from '../components/Nav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="max-w-7xl mx-3 md:mx-auto">
        <Outlet />
      </main>
      <footer className="max-w-7xl mx-3 md:mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
