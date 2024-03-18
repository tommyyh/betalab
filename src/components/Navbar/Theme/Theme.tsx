'use client';

import React, { useEffect, useState } from 'react';
import style from './theme.module.scss';
import Moon from '@/public/nav/moon.svg';
import Sun from '@/public/nav/sun.svg';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    // Set theme
    theme === 'dark' ? setDarkMode(true) : setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      // Set data attribute & save to local storage
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Set data attribute & save to local storage
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={style.themeToggle} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <Moon className={style.moon} />
      ) : (
        <Sun className={style.sun} />
      )}
    </div>
  );
};

export default Theme;
