'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import style from './lazyImage.module.scss';
import { motion, useInView } from 'framer-motion';
import { slideUp } from './animate';

const LazyImage = ({ customClass, ...props }: any) => {
  const div = useRef(null);
  const isInView = useInView(div);

  return (
    <div className={customClass}>
      <motion.div
        initial={{ height: '0%' }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.95, ease: [0.23, 1, 0.15, 1] }}
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
  );
};

export default LazyImage;
