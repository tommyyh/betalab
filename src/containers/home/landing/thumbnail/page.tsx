import Image from '@/components/LazyImage/LazyImage';
import React from 'react';
import thumbnail from '@/public/home/landing/thumbnail.png';
import style from './thumbnail.module.scss';
import PlayIcon from '@/public/home/landing/play-icon.svg';

const Thumbnail = () => {
  return (
    <div className={style.thumbnail}>
      <Image
        src={thumbnail}
        alt="Showcase thumbnail"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />

      <button className={style.play} aria-label="Play video">
        <PlayIcon />
      </button>
    </div>
  );
};

export default Thumbnail;
