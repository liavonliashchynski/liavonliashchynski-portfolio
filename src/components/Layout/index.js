import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import React, { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Layout;
