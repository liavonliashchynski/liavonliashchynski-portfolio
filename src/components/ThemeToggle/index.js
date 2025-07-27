import React from 'react';

function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle;
