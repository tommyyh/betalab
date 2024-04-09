import { motion } from 'framer-motion';
import React from 'react';
import style from './tags.module.scss';

type TagsProps = {
  inView: boolean;
};

const Tags = ({ inView }: TagsProps) => {
  return (
    <motion.ul
      className={style.tags}
      initial="hidden"
      whileInView={inView ? 'visible' : ''}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.45,
      }}
      variants={{
        visible: { opacity: '100%' },
        hidden: { opacity: '0%' },
      }}
    >
      <Tag text={'Web design'} />
      <Tag text={'Web design'} />
      <Tag text={'Web design'} />
      <Tag text={'Web design'} />
    </motion.ul>
  );
};

// Tag
type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return <li>{text}</li>;
};

export default Tags;
