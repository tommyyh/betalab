'use client';

import React, { useEffect, useState } from 'react';
import style from './socials.module.scss';
import Facebook from '@/public/icons/socials/facebook.svg';
import Instagram from '@/public/icons/socials/instagram.svg';
import LinkedIn from '@/public/icons/socials/linkedin-in.svg';
import TikTok from '@/public/icons/socials/tiktok.svg';
import TikTokHover from '@/public/icons/socials/tiktokHover.svg';
import Twitter from '@/public/icons/socials/twitter.svg';
import Social from './Social';

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
      <div className={style.iconCont}>
        <Social
          href="https://www.instagram.com"
          customClass={`${style.social} ${
            activeIcon === 1 ? style.socialActive : ''
          } ${style.facebook}`}
          Icon={Facebook}
          index={1}
        />
      </div>

      {/* Instagram */}
      <div className={style.iconCont}>
        <Social
          href="https://www.instagram.com"
          customClass={`${style.social} ${
            activeIcon === 2 ? style.socialActive : ''
          } ${style.instagram}`}
          Icon={Instagram}
          index={2}
        />
      </div>

      {/* LinkedIn */}
      <div className={style.iconCont}>
        <Social
          href="https://www.instagram.com"
          customClass={`${style.social} ${
            activeIcon === 3 ? style.socialActive : ''
          } ${style.linkedIn}`}
          Icon={LinkedIn}
          index={3}
        />
      </div>

      {/* Twitter */}
      <div className={style.iconCont}>
        <Social
          href="https://www.instagram.com"
          customClass={`${style.social} ${
            activeIcon === 4 ? style.socialActive : ''
          } ${style.twitter}`}
          Icon={Twitter}
          index={4}
        />
      </div>

      {/* TikTok */}
      <div className={style.iconCont}>
        <Social
          href="https://www.instagram.com"
          customClass={`${style.social} ${
            activeIcon === 5 ? style.socialActive : ''
          } ${style.tikTok}`}
          Icon={TikTok}
          index={5}
          Icon2={TikTokHover}
        />
      </div>
    </div>
  );
};

export default Socials;
