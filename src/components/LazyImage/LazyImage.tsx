'use client';

import React from 'react';
import Image from 'next/image';
import style from './lazyImage.module.scss';
import { motion } from 'framer-motion';
import generalJson from '@/data/general.json';

const LazyImage = ({ customClass, rawImg = false, ...props }: any) => {
  return !rawImg ? (
    <div className={customClass}>
      <motion.div
        initial={{ height: '0.18%' }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.2, ease: generalJson.imageAnimation }}
        className={style.imgWrapper}
      >
        <Image
          {...props}
          src={props.src}
          alt={props.alt}
          placeholder="blur"
          className={`${style.blur} ${style.img}`}
          onLoad={(img: any) => img.target.classList.remove(style.blur)}
        />
      </motion.div>
    </div>
  ) : (
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
