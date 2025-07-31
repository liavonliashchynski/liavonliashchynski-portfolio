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

  useEffect(() => {
    const textZone = document.querySelector('.text-zone');
    if (!textZone) return;

    const handleScroll = () => {
      setIsVisible(textZone.scrollTop < 50);
    };

    textZone.addEventListener('scroll', handleScroll);

    return () => {
      textZone.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
