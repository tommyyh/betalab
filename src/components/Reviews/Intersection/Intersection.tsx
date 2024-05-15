'use client';

import React, { useRef } from 'react';
import style from './intersection.module.scss';
import LazyImage from '@/components/LazyImage/LazyImage';
import Image1 from '@/public/home/intersection/1.png';
import Image2 from '@/public/home/intersection/2.png';
import AnimatedImg from '@/components/AnimatedImg/AnimatedImg';

const Intersection = () => {
  const div1 = useRef(null);
  const div2 = useRef(null);

  return (
    <div className={style.intersection}>
      <div className={style.img} ref={div1}>
        <LazyImage
          src={Image1}
          alt="Work showcase"
          customClass={style.image}
          fill
          rawImg
        />

        <AnimatedImg div={div1} />
      </div>

      <div className={style.img} ref={div2}>
        <LazyImage
          src={Image2}
          alt="Work showcase"
          customClass={style.image}
          fill
          rawImg
        />

        <AnimatedImg div={div2} />
      </div>
    </div>
  );
};

export default Intersection;
