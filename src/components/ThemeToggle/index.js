import React, { useState } from 'react';
import './index.scss';
import { PiSunBold } from 'react-icons/pi';
import { IoMoon } from 'react-icons/io5';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);
  const [rotated, setRotated] = useState(false);
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
    setIsLight((prev) => !prev);
  };
  return (
    <button
      className={`toggleThemeButton ${rotated ? 'rotated' : ''}`}
      onClick={() => {
        setRotated(!rotated);
        setTimeout(() => {
          document.body.classList.toggle('light-theme');
          setIsLight((prev) => !prev);
          setRotated(false);
        }, 300);
      }}
    >
      {isLight ? <PiSunBold /> : <IoMoon />}
    </button>
  );
};

export default ThemeToggle;
