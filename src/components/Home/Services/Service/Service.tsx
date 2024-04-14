'use client';

import React from 'react';
import style from './service.module.scss';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';
import { motion } from 'framer-motion';

type PropsType = {
  service: string;
};

const Service = ({ service }: PropsType) => {
  return (
    <li className={style.service} data-cursor="pointer">
      <SmallArrowRight />
      {''}
      <span className={style.word}>
        {service.split(' ').map((letter, index) => (
          <motion.span
            key={index}
            className={style.letter}
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            transition={{ duration: 0.5, delay: 0.3 * index }}
          >
            {letter}
            {' '}
          </motion.span>
        ))}
      </span>
    </li>
  );
};

export default Service;
