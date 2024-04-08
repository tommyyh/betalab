'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import style from './lazyImage.module.scss';
import { motion, useInView } from 'framer-motion';
import { slideUp } from './animate';

const LazyImage = ({ ...props }) => {
  const div = useRef(null);
  const isInView = useInView(div);

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
