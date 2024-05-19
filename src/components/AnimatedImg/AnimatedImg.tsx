'use client';

import React from 'react';
import style from './animatedImg.module.scss';
import { motion, useInView } from 'framer-motion';
import generalJson from '@/data/general.json';

type PropsType = {
  div: any;
  scrollTrigger?: boolean;
};

const AnimatedImg = ({ div, scrollTrigger = true }: PropsType) => {
  const inView = useInView(div, {
    once: true,
    margin: '-53% 0% -37% 0%',
  });

  return (
    <motion.div
      className={style.curtain}
      initial="hidden"
      viewport={{ once: true }}
      whileInView={inView ? 'visible' : scrollTrigger ? '' : 'visible'}
      transition={{
        duration: 0.9,
        ease: generalJson.imageAnimation,
      }}
      variants={{
        visible: { scaleY: 0 },
        hidden: { scaleY: 1 },
      }}
    ></motion.div>
  );
};

export default AnimatedImg;
