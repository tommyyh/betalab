'use client';

import React from 'react';
import ContactArrow from '@/public/icons/contact-arrow.svg';
import { motion } from 'framer-motion';

type PropsType = {
  href: any;
  text: string;
  index: number;
};

const Item = ({ href, text, index }: PropsType) => {
  return (
    <li style={{ overflow: 'hidden', padding: '0.3rem 0' }}>
      <motion.div
        initial={{ y: '160%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.6, delay: 0.072 * index }}
        custom={index}
        key={index}
      >
        <a href={href}>
          <ContactArrow />
          {text}
        </a>
      </motion.div>
    </li>
  );
};

export default Item;
