import React from 'react';
import style from './image.module.scss';
import NextImage from 'next/image';

const Image = ({ ...props }) => {
  return <NextImage {...props} />;
};

export default Image;
