import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import './index.scss';

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

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
      {/* {console.log('isVisible:', isVisible)}
      <ThemeToggle isVisible={isVisible} /> */}
    </div>
  );
};

export default Layout;
