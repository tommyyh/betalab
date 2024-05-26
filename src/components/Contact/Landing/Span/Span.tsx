'use client';

import React from 'react';
import style from './span.module.scss';
import { motion } from 'framer-motion';

type PropsType = {
  index: number;
  text: string;
};

const Span = ({ index, text }: PropsType) => {
  return (
    <div className={style.line}>
      <motion.span
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.6, delay: 0.072 * index }}
        custom={index}
        key={index}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default Span;
