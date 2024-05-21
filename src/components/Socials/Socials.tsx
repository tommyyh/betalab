'use client';

import React, { useEffect, useState } from 'react';
import style from './socials.module.scss';
import Facebook from '@/public/icons/socials/facebook.svg';
import Instagram from '@/public/icons/socials/instagram.svg';
import LinkedIn from '@/public/icons/socials/linkedin-in.svg';
import TikTok from '@/public/icons/socials/tiktok.svg';
import TikTokHover from '@/public/icons/socials/tiktokHover.svg';
import Twitter from '@/public/icons/socials/twitter.svg';

const Socials = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const socials = 5;

  useEffect(() => {
    // Every few seconds set social icon as active => more interactive & draws attention
    const intervalDuration = 2100;
    const interval = setInterval(() => {
      setActiveIcon((prevState) => {
        // If it reaches the last icon => start again
        if (prevState >= socials) {
          return 1;
        } else {
          return prevState + 1;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.socials}>
      {/* Facebook */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        className={`${style.social} ${
          activeIcon === 1 ? style.socialActive : ''
        } ${style.facebook}`}
        data-cursor="pointer"
      >
        <div className={`${style.icon} ${style.icon1}`}>
          <Facebook />
        </div>
        <div className={style.icon}>
          <Facebook />
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        className={`${style.social} ${
          activeIcon === 2 ? style.socialActive : ''
        } ${style.instagram}`}
        data-cursor="pointer"
      >
        <div className={`${style.icon} ${style.icon1}`}>
          <Instagram />
        </div>
        <div className={style.icon}>
          <Instagram />
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        className={`${style.social} ${
          activeIcon === 3 ? style.socialActive : ''
        } ${style.linkedIn}`}
        data-cursor="pointer"
      >
        <div className={`${style.icon} ${style.icon1}`}>
          <LinkedIn />
        </div>
        <div className={style.icon}>
          <LinkedIn />
        </div>
      </a>

      {/* Twitter */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        className={`${style.social} ${
          activeIcon === 4 ? style.socialActive : ''
        } ${style.twitter}`}
        data-cursor="pointer"
      >
        <div className={`${style.icon} ${style.icon1}`}>
          <Twitter />
        </div>
        <div className={style.icon}>
          <Twitter />
        </div>
      </a>

      {/* TikTok */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        className={`${style.social} ${
          activeIcon === 5 ? style.socialActive : ''
        } ${style.tikTok}`}
        data-cursor="pointer"
      >
        <div className={`${style.icon} ${style.icon1}`}>
          <TikTok />
        </div>
        <div className={style.icon}>
          <TikTokHover />
        </div>
      </a>
    </div>
  );
};

export default Socials;
