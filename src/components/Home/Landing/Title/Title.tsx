'use client';

import { motion } from 'framer-motion';
import React from 'react';
import style from './title.module.scss';

const Title = ({ l1, l2, l3 }: any) => {
  return (
    <h1 className={style.title}>
      <Span text={`${l1} `} index={0} />
      <Span text={`${l2} `} index={1} />
      <Span text={l3} index={2} />
    </h1>
  );
};

const Span = ({ text, index }: any) => {
  return (
    <div className={style.line}>
      <motion.span
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.5, delay: 0.125 * index }}
        custom={index}
        key={index}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default Title;
