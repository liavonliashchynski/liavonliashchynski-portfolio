import React from 'react';
import './index.scss';

function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  return (
    <button onClick={toggleTheme} className="toggleThemeButton">
      ☀️Light Mode
    </button>
  );
}

export default ThemeToggle;
