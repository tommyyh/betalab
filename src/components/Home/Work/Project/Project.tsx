'use client';

import React, { useRef } from 'react';
import style from './project.module.scss';
import LazyImage from '@/components/LazyImage/LazyImage';
import { motion, useInView } from 'framer-motion';
import generalJson from '@/data/general.json';
import Tags from './Tags/Tags';

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
      <motion.div
        className={style.curtain}
        initial="hidden"
        viewport={{ once: true }}
        whileInView={inView ? 'visible' : ''}
        transition={{
          duration: 0.9,
          ease: generalJson.imageAnimation,
        }}
        variants={{
          visible: { scaleY: 0 },
          hidden: { scaleY: 1 },
        }}
      ></motion.div>

      <Tags inView={inView} />
    </div>
  );
};

export default Project;
