import React from 'react';
import style from './link.module.scss';
import { Link as NextLink } from '@/navigation';
import ArrowSvg from '@/public/icons/arrow.svg';

type PropsType = {
  href: string;
  text: string;
  customId?: any;
};

const Link = ({ href, text, customId }: PropsType) => {
  return (
    <NextLink href={href} className={style.link} id={customId}>
      <span>{text}</span> <ArrowSvg />
    </NextLink>
  );
};

export default Link;
