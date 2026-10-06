import Image from '@/components/LazyImage/LazyImage';
import React from 'react';
import thumbnail from '@/public/home/landing/thumbnail.png';
import thumbnailMobile from '@/public/home/landing/thumbnail-mobile.png';
import style from './thumbnail.module.scss';

const mobile = '(max-width: 569px)';

const Thumbnail = () => {
  return (
    <>
      {/* Choose thumbnail depending on size */}
      <Image
        src={thumbnail}
        alt="Showcase thumbnail"
        fill
        priority
        placeholder="blur"
        sizes={`${mobile} 1vw, 100vw`}
        style={{ objectFit: 'cover' }}
        customClass={`${style.thumbnail} ${style.desktop}`}
      />

      {/* Mobile only */}
      <Image
        src={thumbnailMobile}
        alt="Showcase thumbnail"
        fill
        priority
        placeholder="blur"
        sizes={`${mobile} 100vw, 1vw`}
        style={{ objectFit: 'cover' }}
        customClass={`${style.thumbnail} ${style.mobile}`}
      />
    </>
  );
};

export default Thumbnail;
