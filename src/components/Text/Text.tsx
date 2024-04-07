'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { slideUp } from './animate';
import style from './text.module.scss';

type PropsType = {
  children: string;
  customClass?: any;
};

const Text = ({ children, customClass }: PropsType) => {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <p ref={description} className={customClass}>
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
    </p>
  );
};

export default Text;
