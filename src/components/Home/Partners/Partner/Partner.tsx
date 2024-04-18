'use client';

import React, { useRef } from 'react';
import style from './partner.module.scss';
import IdkImage from '@/public/home/landing/thumbnail.png';
import Image from 'next/image';

const Partner = ({ Icon }: any) => {
  const imgRef = useRef(null);

  return (
    <div className={style.partner}>
      <a href="www.google.com" target="_blank">
        <Icon />
        <Image
          src={IdkImage}
          alt=""
          style={{ objectFit: 'cover' }}
          ref={imgRef}
        />
      </a>
    </div>
  );
};

export default Partner;
