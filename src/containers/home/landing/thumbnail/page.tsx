import Image from 'next/image';
import React from 'react';
import thumbnail from '@/public/home/landing/thumbnail.png';

const Thumbnail = () => {
  return (
    <Image
      src={thumbnail}
      alt="Showcase thumbnail"
      fill
      priority
      placeholder="blur"
      style={{ objectFit: 'cover' }}
    />
  );
};

export default Thumbnail;
