'use client';

import { motion, stagger, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { slideUp } from './animate';
import style from './title.module.scss';

type PropsType = {
  children: string;
  customClass?: any;
  animateRightAway?: boolean;
};

const Title = ({
  children,
  customClass,
  animateRightAway = false,
}: PropsType) => {
  const description = useRef(null);
  const isInView = useInView(description);

  return !animateRightAway ? (
    // Animate when in view
    <div ref={description} className={customClass}>
      {children.split(' ').map((word: any, index: any) => {
        return (
          <span key={index} className={style.span}>
            <motion.span
              variants={slideUp}
              custom={index}
              animate={isInView ? 'open' : 'closed'}
              key={index}
            >
              {word}
              {' '}
            </motion.span>
          </span>
        );
      })}
    </div>
  ) : (
    // Animate right away -> landing sections
    <div ref={description} className={customClass}>
      {children.split(' ').map((word: any, index: any) => {
        return (
          <span key={index} className={style.span}>
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.5, delay: 0.02 * index }}
              custom={index}
              key={index}
            >
              {word}
              {' '}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

export default Title;
