import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { opacity, slideUp } from './animate';
import style from './loading.module.scss';
import { useMediaQuery } from 'react-responsive';

type PropsType = {
  text: string;
};

const Loading = ({ text }: PropsType) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // Calculate curve
  let curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  if (isDesktop) {
    curve = {
      initial: {
        d: initialPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };
  } else {
    curve = {
      initial: {
        d: initialPath,
        transition: { duration: 0.7, ease: [0, 0, 0.09, 0.5] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0, 0, 0.09, 0.5], delay: 0.3 },
      },
    };
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={style.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {text}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Loading;
