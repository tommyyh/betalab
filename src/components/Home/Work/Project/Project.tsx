'use client';

import React, { useRef } from 'react';
import style from './project.module.scss';
import LazyImage from '@/components/LazyImage/LazyImage';
import { useInView } from 'framer-motion';
import Tags from './Tags/Tags';
import AnimatedImg from '@/components/AnimatedImg/AnimatedImg';

const Project = ({ ...props }) => {
  const div = useRef(null);
  const inView = useInView(div, {
    once: true,
    margin: '-53% 0% -37% 0%',
  });

  return (
    <div className={style.project} data-cursor="work" ref={div}>
      <LazyImage
        {...props}
        src={props.src}
        alt={props.alt}
        quality={100}
        rawImg={true}
      />

      {/* Emulate image animation for mobile - % headaches */}
      <AnimatedImg div={div} />

      <Tags inView={inView} />
    </div>
  );
};

export default Project;
