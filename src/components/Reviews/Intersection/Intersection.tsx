import React from 'react';
import style from './intersection.module.scss';
import LazyImage from '@/components/LazyImage/LazyImage';
import Image1 from '@/public/home/intersection/1.png';
import Image2 from '@/public/home/intersection/2.png';

const Intersection = () => {
  return (
    <div className={style.intersection}>
      <LazyImage
        src={Image1}
        alt="Work showcase"
        customClass={style.image}
        fill
      />

      <LazyImage
        src={Image2}
        alt="Work showcase"
        customClass={style.image}
        fill
      />
    </div>
  );
};

export default Intersection;
