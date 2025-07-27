import React from 'react';
import { useEffect } from 'react';
import './index.scss';

const ThemeToggle = ({ isVisible }) => {
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  useEffect(() => {
    const handleResize = () => {
      const button = document.querySelector('.toggleThemeButton');
      if (window.innerWidth < 390) {
        button.textContent = '☀️';
        button.style.fontSize = '20px';
      } else {
        button.textContent = '☀️ Light Mode';
        button.style.fontSize = 'clamp(10px, 1vw, 13px)';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // call once on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`toggleThemeButton ${isVisible ? '' : 'hidden'}`}
      aria-hidden={!isVisible}
    >
      ☀️ Light Mode
    </button>
  );
};

export default ThemeToggle;
