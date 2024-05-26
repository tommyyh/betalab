'use client';

import React from 'react';
import style from './socials.module.scss';
import { motion } from 'framer-motion';

type PropsType = {
  href: string;
  customClass: string;
  index: number;
  Icon: any;
  Icon2?: any;
};

const Social = ({ href, customClass, Icon, Icon2, index }: PropsType) => {
  return (
    <motion.div
      initial={{ y: '120%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.6, delay: 0.073 * index }}
      custom={index}
      key={index}
    >
      <a
        href={href}
        target="_blank"
        className={customClass}
        data-cursor="pointer"
      >
        <div className={`${style.icon} ${style.icon1}`}>
          <Icon />
        </div>
        <div className={style.icon}>{Icon2 ? <Icon2 /> : <Icon />}</div>
      </a>
    </motion.div>
  );
};

export default Social;
