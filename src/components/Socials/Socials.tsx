import React from 'react';
import style from './socials.module.scss';
import Facebook from '@/public/icons/socials/facebook.svg';
import Instagram from '@/public/icons/socials/instagram.svg';
import LinkedIn from '@/public/icons/socials/linkedin-in.svg';
import TikTok from '@/public/icons/socials/tiktok.svg';
import TikTokHover from '@/public/icons/socials/tiktokHover.svg';
import Twitter from '@/public/icons/socials/twitter.svg';

const Socials = () => {
  return (
    <div className={style.socials}>
      {/* Facebook */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        className={`${style.social} ${style.facebook}`}
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
        className={`${style.social} ${style.instagram}`}
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
        className={`${style.social} ${style.linkedIn}`}
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
        className={`${style.social} ${style.twitter}`}
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
        className={`${style.social} ${style.tikTok}`}
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
