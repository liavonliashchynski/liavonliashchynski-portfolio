import React from 'react';
import { useEffect } from 'react';
import './index.scss';
import { PiSunBold } from 'react-icons/pi';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };
  return (
    <button className="toggleThemeButton" onClick={toggleTheme}>
      <PiSunBold />
    </button>
  );
};

export default ThemeToggle;
