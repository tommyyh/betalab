'use client';

import React from 'react';
import style from './carousel.module.scss';
import PartnerSvg from '@/public/home/partners/israsfaren.svg';

type PropsType = {};

const Carousel = ({}: PropsType) => {
  const lang = 'partners';

  return (
    <div className={style.carousel}>
      <div className={style.logos}>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
      </div>

      {/* Duplicate */}
      <div className={style.logos}>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
        <a href="www.google.com" target="_blank">
          <PartnerSvg />
        </a>
      </div>
    </div>
  );
};

export default Carousel;
