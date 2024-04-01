'use client';

import React from 'react';
import Image from 'next/image';
import style from './lazyImage.module.scss';

const LazyImage = ({ ...props }) => {
  return (
    <Image
      {...props}
      src={props.src}
      alt={props.alt}
      placeholder="blur"
      className={`${style.blur} ${style.img}`}
      onLoad={(img: any) => img.target.classList.remove(style.blur)}
    />
  );
};

export default LazyImage;
