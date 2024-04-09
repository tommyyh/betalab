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
    margin: '-09% 0% -60% 0%',
  });

  return (
    <div className={style.project} data-cursor="work">
      <motion.div
        ref={div}
        className={style.imgWrapper}
        initial="hidden"
        viewport={{ once: true }}
        whileInView={inView ? 'visible' : ''}
        transition={{
          duration: 1.25,
          ease: generalJson.imageAnimation,
        }}
        variants={{
          visible: { height: '100%' },
          hidden: { height: '0.01%' },
        }}
      >
        <LazyImage
          {...props}
          src={props.src}
          alt={props.alt}
          quality={100}
          rawImg={true}
        />
      </motion.div>

      <Tags inView={inView} />
    </div>
  );
};

export default Project;
