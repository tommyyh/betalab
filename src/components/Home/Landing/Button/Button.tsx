'use client';

import React from 'react';
import style from './button.module.scss';
import BtnLink from '@/components/BtnLink/BtnLink';
import { motion } from 'framer-motion';

type PropsType = {
  href: string;
  title: string;
  customClass?: string;
  wrapperClass?: string;
};

const Button = ({ title, href, customClass, wrapperClass }: PropsType) => {
  return (
    <div className={style.cont}>
      <motion.div
        initial={{ y: '100%', opacity: '0%' }}
        animate={{ y: '0%', opacity: '100%' }}
        transition={{ duration: 0.65 }}
        className={wrapperClass}
      >
        <BtnLink href={href} title={title} customClass={customClass} />
      </motion.div>
    </div>
  );
};

export default Button;
