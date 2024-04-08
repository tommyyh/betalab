import Image from '@/components/LazyImage/LazyImage';
import React from 'react';
import thumbnail from '@/public/home/landing/thumbnail.png';
import style from './thumbnail.module.scss';

const Thumbnail = () => {
  return (
    <Image
      src={thumbnail}
      alt="Showcase thumbnail"
      fill
      priority
      placeholder="blur"
      sizes="100vw"
      style={{ objectFit: 'cover' }}
      customClass={style.thumbnail}
    />
  );
};

export default Thumbnail;
