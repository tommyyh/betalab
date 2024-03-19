'use client';

import React, { useEffect, useState } from 'react';
import style from './theme.module.scss';
import Moon from '@/public/nav/moon.svg';
import Sun from '@/public/nav/sun.svg';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';

    document.body.setAttribute('data-theme', theme);

    setDarkMode(theme === 'dark' ? true : false);
  }, []);

  const setTheme = () => {
    // Save changes
    const theme = darkMode ? 'light' : 'dark';

    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    setDarkMode(!darkMode);
  };

  return (
    <div className={style.themeToggle} onClick={setTheme}>
      {darkMode ? (
        <Moon className={style.moon} />
      ) : (
        <Sun className={style.sun} />
      )}
    </div>
  );
};

export default Theme;
