'use client';

import React from 'react';
import style from './carousel.module.scss';
import Partner from '../Partner/Partner';
import PartnerSvg from '@/public/home/partners/israsfaren.svg';

type PropsType = {};

const Carousel = ({}: PropsType) => {
  return (
    <div className={style.carousel}>
      <div className={style.logos}>
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
      </div>

      {/* Duplicate */}
      <div className={style.logos}>
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
      </div>
    </div>
  );
};

export default Carousel;
